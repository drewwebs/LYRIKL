export default (selection) => {
    return {
        line_start: selection.anchorNode.previousElementSibling.dataset["sourcepos"].split(":")[0],
        line_end: selection.focusNode.previousElementSibling.dataset["sourcepos"].split(":")[0],
        start_pos: selection.anchorOffset,
        end_pos: selection.focusOffset
    };
};

// export const getEndLine = (selection) => {
//     return ;
// };

// export const getAnchorOffset = (selection) => {
//     return ;
// };

// export const getFocusOffset = (selection) => {
//     return ;
// };