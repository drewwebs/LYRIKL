import React from 'react';
import Comment from './comment_show';

export default class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments: props.comments ? Object.values(props.comments) : [], 
            newComment: {body: ""}, 
            showButton: false
        };
        // this.comments = props.comments ? this.comments = Object.values(props.comments) : this.comments = [];
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit() {
        this.props.createComment(this.state.newComment)
        .then(() => this.setState({ comments: this.state.comments.concat(this.state.newComment) }))
        .then(() => this.setState({ newComment: {body: ""}}));
    }

    handleChange() {
        return e => this.setState({ newComment: { 
            body: e.currentTarget.value, 
            commentable_type: "Annotation", 
            commentable_id: this.props.annotation.id,
            author_id: this.props.currentUser.id,
            author: this.props.currentUser
        }});
    }

    render() {
        
        return (
            this.props.currentUser || this.state.comments.length > 1 ?
                <ul className="comments-section">
                    {this.props.currentUser ?
                        <form 
                            className="comments-section-form">
                            <h2 className="comments-section-header">Help us improve this annotation</h2>
                            <input onFocus={() => this.setState({ showButton: true })}
                                // onBlur={() => this.setState({ showButton: false })} 
                                value={this.state.newComment.body}
                                className="comments-section-input-box" type="text" placeholder="Suggest an improvement" onChange={this.handleChange()} />
                            {this.state.showButton ? 
                                <button onClick={this.handleSubmit} className="comments-section-submit-button">Submit</button>
                                :
                                <></>
                            }
                        </form> : <></>
                    }
                    {this.state.comments.map(comment => <Comment key={comment.id} comment={comment} deleteComment={this.props.deleteComment} />)}
                </ul>
            : <></> 
        )
    }
}