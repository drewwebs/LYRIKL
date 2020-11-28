import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LikeForm from '../likes/like_form';
import { fetchComment } from '../../actions/comment_actions';

export default ({ commentId, deleteComment, currentUser }) => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState();

    useEffect(() => {
        dispatch(fetchComment(commentId)).then(data => setComment(data.comment));
    }, []);

    return ( 
        comment ?
            <li className="comment-show">
                <p className="comment-show-author">{comment.author.username}</p>
                <p className="comment-show-body">{comment.body}</p>
                {currentUser ? <LikeForm type={"Comment"} likeableId={comment.id} numLikes={comment.num_likes} /> : ""}
            </li> : ""
    )
}

