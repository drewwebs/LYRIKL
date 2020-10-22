import React from 'react';

export default ({ comment, deleteComment }) => (
    <div className="comment-show">
        <p>{comment.body}</p>
        <p>-by {comment.author.username}</p>
    </div>
)

