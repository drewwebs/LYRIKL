import { createAnnotation } from '../../actions/annotation_actions';
import { fetchSong } from '../../actions/song_actions';
import { connect } from 'react-redux';
import AnnotationForm from './create_annotation_form';

const mSTP = (state, ownProps) => {
    return {
        annotation: {
            body: "",
            author_id: state.session.currentUser.id,
            song_id: ownProps.songId,
            selection: ownProps.selection
        }
    };
};

const mDTP = dispatch => ({
    createAnnotation: (annotation) => dispatch(createAnnotation(annotation)),
    fetchSong: (songId) => dispatch(fetchSong(songId))
});

export default connect(mSTP, mDTP)(AnnotationForm);