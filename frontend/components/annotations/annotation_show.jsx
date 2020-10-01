import React from 'react';
import { connect } from 'react-redux';

const Annotation = ({annotation, yOffset}, currentUser) => {
    const isUser = currentUser.id === annotation.author_id; 
    return (
        <div className="song-show-body-annotations-display" style={{position:`absolute`, top: `${yOffset}px`}}>
            <p className="song-show-body-annotations-display-body">
                {annotation.body}
            </p>
            <footer className="news-footer">
                <div className="news-footer-author">Annotation by {annotation.author.username}</div>
            </footer>
            {isUser ? <button className="annotation-edit-button">Edit</button> : <div></div>}
        </div>
    )
}

const mSTP = ({ session }) => ({
    currentUser: session.currentUser
})

export default connect(mSTP, null)(Annotation)