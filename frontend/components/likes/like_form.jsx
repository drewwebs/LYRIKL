import React, { useLayoutEffect } from 'react';
import { createLike, deleteLike } from '../../actions/like_actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

const LikeForm = ({ createLike, deleteLike, numLikes, likeableId, currentUser }) => {
    
    const previouslyLiked = () => {
        for (let i = 0; i < currentUser.likes.length; i++) {
            const like = currentUser.likes[i];
            if (like[1] === likeableId) {
                return like[0];
            }
        }
        return false;
    };

    const [likes, setLikes] = useState(numLikes);

    const [buttonClass, setButtonClass] = useState(previouslyLiked() ? "liked" : "");

    const handleLikes = (action) => {
        const button = document.getElementById(`${likeableId}-likes-button`);
        switch (action) {
            case "add":
                createLike()
                    .then(setLikes(likes + 1))
                    .then(setButtonClass(null))
                    .then(button.classList.add("liked"));
                break;
            case "delete":
                deleteLike(previouslyLiked())
                .then(setButtonClass("liked"))
                .then(setLikes(likes - 1))
                .then(button.classList.remove("liked"));
                break;
            default:
                break;
        }
    };


    // useLayoutEffect(()=> {
    //     const button = document.getElementById("likes-button");
    //     previouslyLiked() ? button.classList.add("liked") : button.classList.remove("liked")
    // });



    return (
        <form className="likes-form" onClick={e=> e.stopPropagation()} onSubmit={(e) => {e.preventDefault(); return previouslyLiked() ? handleLikes("delete") : handleLikes("add")}}>
            <button className="likes-form-button"><i id={`${likeableId}-likes-button`} className={`far fa-thumbs-up likes-form-button-inner ${buttonClass}`}></i><div className="likes-form-button-text">{likes > 0 ? "+" + likes : ""}</div></button>
        </form>
    )
}

const mSTP = ({ session }) => ({
    currentUser: session.currentUser
})

const mDTP = (dispatch, ownProps) => ({
    createLike: () => dispatch(createLike({likeable_type: ownProps.type, likeable_id: ownProps.likeableId})),
    deleteLike: (likeId) => dispatch(deleteLike(likeId))
})

export default connect(mSTP, mDTP)(LikeForm)    