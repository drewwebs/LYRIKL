import React from 'react';

export default ({ comment, deleteComment }) => (
    <li className="comment-show">
        <p className="comment-show-author">{comment.author.username}</p>
        <p className="comment-show-body">{comment.body}</p>
    </li>
)

