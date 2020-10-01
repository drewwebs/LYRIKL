import { createAnnotation } from '../../actions/annotation_actions';
import { fetchSong } from '../../actions/song_actions';
import { connect } from 'react-redux';
import AnnotationForm from './annotation_form';

const mSTP = (state, ownProps) => {
    return {
        annotation: ownProps.annotation
    };
};

const mDTP = dispatch => ({
    action: (annotation) => dispatch(createAnnotation(annotation)),
    fetchSong: (songId) => dispatch(fetchSong(songId))
});

export default connect(mSTP, mDTP)(AnnotationForm);