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

    render() {
        return (
        <div>
            <h1>Create an annotation:</h1>
            <form onSubmit={this.handleSubmit}>



            </form>
        </div >
    )}
}