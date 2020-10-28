import React from 'react';
import Comment from './comment_show';

export default class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { comment: {body: ""}, showButton: false };
        this.comments = props.comments ? this.comments = Object.values(props.comments) : this.comments = [];
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit() {
        this.props.createComment(this.state.comment)
        .then(() => this.props.fetchSong(annotation.song_id));
    }

    handleChange() {
        return e => this.setState({ comment: { 
            body: e.currentTarget.value, 
            commentable_type: "Annotation", 
            commentable_id: this.props.annotation.id,
            author_id: this.props.currentUser.id
        }});
    }

    render() {
        
        return (
            this.props.currentUser || this.comments.length > 1 ?
                <ul className="comments-section">
                    {this.props.currentUser ?
                        <form className="comments-section-form">
                            <h2 className="comments-section-header">Help us improve this annotation</h2>
                            <input onClick={() => this.state.showButton ? this.setState({ showButton: false }) : this.setState({ showButton: true })}
                                className="comments-section-input-box" type="text" placeholder="Suggest an improvement" onChange={this.handleChange()} />
                            {this.state.showButton ? 
                                <button onClick={this.handleSubmit} className="comments-section-submit-button">Submit</button>
                                :
                                <></>
                            }
                        </form> : <></>
                    }
                    {this.comments.map(comment => <Comment key={comment.id} comment={comment} deleteComment={this.props.deleteComment} />)}
                </ul>
            : <></> 
        )
    }
}