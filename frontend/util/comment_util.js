export const createComment = (comment) => {
    return $.ajax({
        method: 'POST',
        url: `api/comments`,
        data: { comment }
    });
};

export const fetchComment = (commentId) => (
    $.ajax({
        method: 'GET',
        url: `api/comments/${commentId}`
    })
);

export const updateComment = (comment) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/comments/${comment.id}`,
        data: { comment }
    });
};

export const deleteComment = (commentId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/comments/${commentId}`
    })
);