const getLineNumber = (node) => {
    if (node.previousElementSibling.nodeName === "A") {
        return getLineNumber(node.previousElementSibling);
    } else {
        return node.previousElementSibling.dataset["sourcepos"].split(":")[0];
    }
};

export default (selection) => {
    return {
        line_start: getLineNumber(selection.anchorNode),
        line_end: getLineNumber(selection.focusNode),
        start_pos: selection.anchorOffset,
        end_pos: selection.focusOffset
    };
};