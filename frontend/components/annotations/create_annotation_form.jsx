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
          <form 
            className="annotation-form" 
            onSubmit={this.handleSubmit} 
            style={{ position: `absolute`, top: `${this.props.yOffset}px` }}>
              <textarea
                placeholder="Drop some LYRIKL knowledge!"
                className="annotation-form-input"
                required={true}
                value={this.state.body}
                onChange={this.handleChange()}
                rows="8"
              />

              <div className="annotation-form-buttons">
                <button className="annotation-form-submit-button">Save (+5 IQ)</button>
                <div
                  className="annotation-form-cancel-button"
                  onClick={() => this.props.onCancel()}
                >Cancel</div>

              </div>
            </form>
        );}
}