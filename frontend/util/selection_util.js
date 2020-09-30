export const getStartLine = (selection) => {
    return selection
      .anchorNode.previousElementSibling.dataset["sourcepos"].split(":")[0];
};

export const getEndLine = (selection) => {
    return selection.focusNode.previousElementSibling.dataset["sourcepos"].split(":")[0];
};

export const getAnchorOffset = (selection) => {
    return selection.anchorOffset;
};

export const getFocusOffset = (selection) => {
    return selection.focusOffset;
};