import React from 'react';

export default ({ comment, deleteComment }) => (
    <div className="comment-show">
        <h1>{comment.body}</h1>
    </div>
)

