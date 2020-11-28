import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import Gravatar from 'react-gravatar';

export default (props) => {
    const dispatch = useDispatch();
    const [user, setUser] = useState();
    const currentUser = useSelector(state => state.session.currentUser);
    
    useEffect( () => {
        dispatch(fetchUser(props.match.params.userId))
        .then(data => setUser(data.user));
    }, []);
    

    if (!user) return null;
    const IQ = (Object.values(user.comments).length * 3) + (Object.values(user.annotations).length * 5) + (Object.values(user.likes).length);
    const isUser = currentUser.id === user.id ? true : false;

    return (
        <div className="profile-container">
            <div className={`profile-details-picture-container`}>
                <Gravatar default="mp" className="profile-details-picture" email={user.email} size={200} />
                <div className={`profile-details-picture-overlay ${isUser ? "logged-in" : ""}`}>{isUser ? <button className="logged-in-edit-button-container"><i className="fas fa-user-edit logged-in-edit-button"></i>Edit</button>  : ""} </div>
            </div>
            <div className="profile-details">
                <div className="profile-details-info">
                    <h1 className="profile-details-username">{user.username}</h1>
                    <h1 className="profile-details-email">{user.email}</h1>
                    <h1 className="profile-details-iq">Total IQ: {IQ}</h1>
                </div>
            </div>
        </div>
    )
};