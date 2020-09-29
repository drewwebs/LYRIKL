import { createAnnotation } from '../../actions/annotation_actions';
import { connect } from 'react-router-dom';
import AnnotationForm from './create_annotation_form';

const mSTP = (state) => ({
    annotation: {
        body: "",
        author: state.session.currentUser
    }
});

const mDTP = dispatch => ({
    createAnnotation: (annotation) => dispatch(createAnnotation(annotation))
});

export default connect(mSTP, mDTP)(AnnotationForm);