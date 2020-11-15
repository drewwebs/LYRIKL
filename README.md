![LYRIKL header](https://lyrikl.herokuapp.com/assets/logo-430431a0a8eee7d0d5b22f595b845de25c352a01b7aeed234ee7094f528473b6.svg)

# README

https://lyrikl.herokuapp.com/

***LYRIKL*** is a clone of Rap Genius developed by Drew Webster.  The site allows users to view songs, and add annotations to lyrics that provide insight into what certain lines may mean.  Song lyrics are rendered using [React Markdown](https://github.com/rexxars/react-markdown) using custom link renderers.

# Annotations

**Adding an annotation** to a song is simple.  Simply highlight the lyrics that you'd like to annotate, and type your insights into the box provided!  You can annothing from a single letter up to an entire verse. ***LYRIKL*** records your selection and uses recursion and custom link renderers to apply your annotation to the correct set of lyrics, and render it as a markdown link.  Your annotation will then be viewable by anybody else accessing the site.

*note: Annotation headers of verses is not supported, and will throw a 422 error*

**Editing or deleting an annotation**: If you select an annotation that you wrote, you will be granted a button to either delete or edit your annotation.

![Annotation demo](https://i.imgur.com/kh2a2gc.gif)

# Comments

**Adding a comment** You may comment on your own, or somebody else's annotation to suggest edits or add additional insight.

# Likes

In the case where you enjoy an annotation, but have nothing to suggest or add, you may simply like the annotation.  You may also like comments.

***LYRIKL*** uses the Last.FM API to fetch the artwork for each song uploaded upon the song's creation.


# Author
Drew Webster || [github](https://github.com/drewwebs/) || [LinkedIn](https://www.linkedin.com/in/drew-webster-4261a934/) 

