const getLineNumber = (node) => {
    if (node.previousElementSibling.nodeName === "A") {
        return getLineNumber(node.previousElementSibling);
    } else {
        return node.previousElementSibling.dataset["sourcepos"].split(":")[0];
    }
};

const getOffset = (originalOffset, node) => {
    if (node.previousElementSibling.nodeName !== "A") {
        return originalOffset;
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
    return {
        line_start: getLineNumber(selection.anchorNode),
        line_end: getLineNumber(selection.focusNode),
        start_pos: getOffset(selection.anchorOffset, selection.anchorNode),
        end_pos: getOffset(selection.focusOffset, selection.focusNode)
    };
};