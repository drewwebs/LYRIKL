For this project, I cloned [Genius](https://genius.com/), a site for song lyrics that is famously known for users' ability to add annotations to songs.  While the idea of replicating the site design and hosting a database of songs and lyrics was fairly simple, creating a home-brewed method for annotations presented itself as quite the challenge.

Immediately, I set to work on how I could solve such a problem.  I came up with several potential paths to take:  

1) I could save a reference to the `highlighted_lyrics` & the `song_id` into an *annotation table*, and simply search the page for the `highlighted_lyrics` to render annotations alongside on the load event.  **The problem:** many songs repeat lyrics, and besides, I wanted users to be able to highlight any amount of text, even just a single letter on the page.

2) I could save the `line_number` along with the `highlighted_lyrics`, and insert the annotation that way. **The problem:** If a user edits the lyrics, the match may no longer exist, or the line may be different.

3) I could hold no reference to the highlighted lyrics at all, but instead just mutate the body of the song to render a link to the correct annotation.  Having chosen this method, I was presented with a new set of challenges, which I will walk through now.

For starters, I decided to render the lyrics as markdown to simplify the link creation process.  I installed [react-markdown](https://github.com/remarkjs/react-markdown) and quickly got to work. All I needed to do was insert an opening `[` at the start of the selection, and a closing `]` along with a link to the annotation at the end.

My hope was to transform this:

```
"The times they are a changin"
```

Into this:

```
"[The times they are a changin](/annotations/annotationId)"
```

I needed to know exactly where to make my mutations inside the lyrics column of my table.  To do that, I required 4 data points:  The line and position at which the selection starts, and the line and position at which it ends.

`window.getSelection()` gave me the positions at which the selection started and ended in the form of a `focusOffset` and `anchorOffset`, but the `focusNode` and `anchorNode` unfortunately did not give me anything that I could translate into a line number. 

After some digging, I came across a note I had missed in the `react-markdown` docs: 
```
sourcePos (boolean, default: false)
Pass a prop to all renderers with a serialized position (data-sourcepos="3:1-3:13")
```

Close, but no cigar:  After setting my `sourcePos` flag to true, I was quickly reminded that the nodes I was using were `#text` nodes, and therefor did not receive any data from the renderer.  I had to get creative if I wanted to grab that line number.  Luckily, each node also provides reference to it's `previousElementSibling`, which in this case would always either be a `<br>` or a `<p>` tag, both of which have a `sourcePos`!

Now I just needed to perform the mutation inside of my annotation model:

```
    def reformat_lyrics
        song = Song.find(self.song_id) 
        lines = song.lyrics.split("\n")
        lines[self.line_end].insert(self.end_offset, "](#{self.id.to_s})")
        lines[self.line_start].insert(self.start_offset, "[")
        song.lyrics = lines.join("\n")
        song.save!
    end
```

Instead of storing a link to the annotation (`/annotation/annotationId`), I stored just the annotation's `id`.  Upon clicking on an annotation, I didn't actually want to leave the song's show page or alter the URL.  Instead, I inserted the annotation's `id` as the `id` of the rendered `<a>` tag and extracted it `onClick` to perform a `fetchAnnotation` action and display the appropriate annotation through state management on the `song_show` component.

Link creation:

```
export const linkCreator = (reference) => (
    <a id={`${reference.href}`} > 
      {reference.children.map( (child) => child.type === "br" ? <br /> : child.props.value )}
    </a>
)
```



Excited, I rushed to try it out.  It worked!  I was able to create my first annotation! But with annotations now in the body, two new issue immediately dawned on me:  

1) I suddenly have a new potential `previousElementSibling` in the lyrics' body (an `<a>` for the annotation), and this one wouldn't have `sourcePos` data to extract.

2) The `focusOffset` and `anchorOffset` that I was using both provide the offset in regards to the closest previous element, which could now potentially be in the middle of a line.  

Enter recursion:  I refactored my selection utility to recursively call until the node's `previousElementSibling` was anything *other* than an anchor tag, storing and accumulating any necessary variables along the way, like so: 

```
const getLineNumber = (node) => {
    if (node.previousElementSibling.nodeName === "A") {
        return getLineNumber(node.previousElementSibling) + node.previousElementSibling.innerHTML.split("<br>").length - 1;
    } else {
        return parseInt(node.previousElementSibling.dataset["sourcepos"].split(":")[0]);
    }
};

const getOffset = (originalOffset, node) => {
    if (node.previousElementSibling.nodeName !== "A") {
        if (node.nodeName === "A" && node.previousSibling.nodeName === "#text") {
            return originalOffset + node.previousSibling.length;
        } else {
            return originalOffset;
        }
    } else {
        let newOffset = 0;
        let annotationLength = addAnnotationOffset(node.previousElementSibling);
        
        if (node.nodeName === "A" && node.previousSibling.nodeName === "#text") {
            newOffset = originalOffset + annotationLength + node.previousSibling.length;
        } else {
            newOffset = originalOffset + annotationLength;
        }
        return getOffset(newOffset, node.previousElementSibling);
    }
};
```

Now I could call `getLineNumber` and `getOffset` on the `anchorNode` and `focusNode`, and it would give me everything I needed to insert my annotations!  As a bonus, these annotations were line specific, could survive mutations, additions, and other modifications to the lyrics, and could be deleted easily using the same line and offset information that was stored during creation!

I added a function with logic to flip the variables if somebody highlighted text from end to start, and then store the needed data points in an object to be returned.  I exported that function to be called whenever somebody selects text on the page:

```
export default (selection) => {
    const focusLine = getLineNumber(selection.focusNode);
    const anchorLine = getLineNumber(selection.anchorNode);
    const anchorPos = getOffset(selection.anchorOffset, selection.anchorNode);
    const focusPos = getOffset(selection.focusOffset, selection.focusNode);
    
    let [lineStart, startPos, lineEnd, endPos] = focusLine >= anchorLine ? [anchorLine, anchorPos, focusLine, focusPos] : [focusLine, focusPos, anchorLine, anchorPos];

    if (focusLine === anchorLine && anchorPos > focusPos) {
        [startPos, endPos] = [endPos, startPos];
    }

    return {
        line_start: lineStart,
        line_end: lineEnd,
        start_pos: startPos,
        end_pos: endPos
    };
};
```
That was it!  With a few more minor tweaks for edge cases, my annotations were working like a dream.  

Questions? Suggestions?  Let me know in the comments!
