import React from 'react';

export default class CreateAnnotationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.annotation;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.createAnnotation(this.state);
    }

    handleChange() {
        return (e) => this.setState({ body: e.currentTarget.value });
    }

    render() {
        return (
        <div>
            <h1>Create an annotation:</h1>
            <form onSubmit={this.handleSubmit}>
                <textarea 
                    placeholder="Drop some LYRIKL knowledge!" 
                    className="form-input" 
                    required={true} 
                    value={this.state.body}
                    onChange={this.handleChange()}
                    rows="8" />

                <div className="cancel-button" onClick={() => this.props.onCancel()}></div>
                <button>Save (+5 IQ)</button>
            </form>
        </div >
    )}
}