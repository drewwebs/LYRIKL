import React from 'react';
import { connect } from 'react-redux';
import { deleteAnnotation } from '../../actions/annotation_actions';
import { fetchSong } from '../../actions/song_actions';
import LikeForm from '../likes/like_form';
import CommentIndex from '../comments/comment_index_container';

class Annotation extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.annotation;
    }

    componentDidUpdate(prevProps) {
        if (this.props.annotation.numLikes !== prevProps.numLikes) this.props.fetchAnnotation();
    }

    render() {
        const isUser = this.props.currentUser && (this.props.currentUser.id === this.props.annotation.author.id.toString() || this.props.currentUser.id === this.props.annotation.author.id); 
        
        return (
            <div className="song-show-body-annotations-display" style={{position:`absolute`, top: `${this.props.yOffset}px`}}>
                <footer className="news-footer">
                    <div className="news-footer-author">Annotation by {this.props.annotation.author.username}</div>
                </footer>
                <p className="song-show-body-annotations-display-body">
                    {this.props.annotation.body}
                </p>
                {isUser ? <div className="annotation-edit-button-container">
                    <button className="annotation-edit-button" onClick={ () => this.props.displayForm("edit")}>Edit</button> 
                    <button className="annotation-delete-button" onClick={ () => this.props.deleteAnnotation().then(() => this.props.fetchSong()).then( () => this.props.clearPage())}>Delete</button>
                    </div>: <div></div>}
                <LikeForm annotationId={this.props.annotation.id} numLikes={this.props.annotation.num_likes} />
                <CommentIndex handleFinish={this.props.handleFinish} annotation={this.props.annotation} comments={this.props.annotation.comments} addAnnotation={this.props.addAnnotation}/>
            </div>
        )
    }
}

const mSTP = ({ session }) => ({
    currentUser: session.currentUser
})

const mDTP = (dispatch, ownProps) => {
    return {
        fetchAnnotation: () => dispatch(fetchAnnotation(ownProps.annotation.id)),
        deleteAnnotation: () => dispatch(deleteAnnotation(ownProps.annotation.id)),
        fetchSong: () => dispatch(fetchSong(ownProps.annotation.song_id)),
    }
}

export default connect(mSTP, mDTP)(Annotation)