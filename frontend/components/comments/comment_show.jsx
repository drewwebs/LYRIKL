import React from 'react';
import LikeForm from '../likes/like_form';

export default ({ comment, deleteComment, currentUser }) => (
    <li className="comment-show">
        <p className="comment-show-author">{comment.author.username}</p>
        <p className="comment-show-body">{comment.body}</p>
        {currentUser ? <LikeForm type={"Comment"} likeableId={comment.id} numLikes={comment.num_likes} /> : ""}
    </li>
)

