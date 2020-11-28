const addAnnotationOffset = (annotationNode) => {
    let lines = annotationNode.innerHTML.split("<br>");
    return lines.length > 1 ? 
        lines[lines.length - 1].length + "]()".length + annotationNode.id.length 
        : annotationNode.text.length + annotationNode.id.length + "[]()".length;
}

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