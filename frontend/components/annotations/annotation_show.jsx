import React from 'react';
import { connect } from 'react-redux';
import { deleteAnnotation } from '../../actions/annotation_actions';
import { fetchSong } from '../../actions/song_actions';

const Annotation = ({annotation, yOffset, currentUser, displayForm, deleteAnnotation, fetchSong, clearPage}) => {

    const isUser = currentUser && (currentUser.id === annotation.author.id.toString() || currentUser.id === annotation.author.id); 
    return (
        <div onClick={(e) => e.stopPropagation()} className="song-show-body-annotations-display" style={{position:`absolute`, top: `${yOffset}px`}}>
            <p className="song-show-body-annotations-display-body">
                {annotation.body}
            </p>
            <footer className="news-footer">
                <div className="news-footer-author">Annotation by {annotation.author.username}</div>
            </footer>
            {isUser ? <div className="annotation-edit-button-container">
                <button className="annotation-edit-button" onClick={ () => displayForm("edit")}>Edit</button> 
                <button className="annotation-delete-button" onClick={ () => deleteAnnotation().then(() => fetchSong()).then( () => clearPage())}>Delete</button>
                </div>: <div></div>}
        </div>
    )
}

const mSTP = ({ session }) => ({
    currentUser: session.currentUser
})

const mDTP = (dispatch, ownProps) => {
    return {
        deleteAnnotation: () => dispatch(deleteAnnotation(ownProps.annotation.id)),
        fetchSong: () => dispatch(fetchSong(ownProps.annotation.song_id))
    }
}

export default connect(mSTP, mDTP)(Annotation)