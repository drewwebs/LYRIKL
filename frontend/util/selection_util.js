const getLineNumber = (node) => {
    if (node.previousElementSibling.nodeName === "A") {
        return getLineNumber(node.previousElementSibling);
    } else {
        return node.previousElementSibling.dataset["sourcepos"].split(":")[0];
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
        if (node.nodeName === "A" && node.previousSibling.nodeName === "#text") {
            newOffset = originalOffset + node.previousElementSibling.text.length + node.previousElementSibling.id.length + "[]()".length + node.previousSibling.length;
        } else {
            newOffset = originalOffset + node.previousElementSibling.text.length + node.previousElementSibling.id.length + "[]()".length;
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