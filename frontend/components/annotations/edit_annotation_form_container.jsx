import { updateAnnotation } from '../../actions/annotation_actions';
import { fetchSong } from '../../actions/song_actions';
import { connect } from 'react-redux';
import AnnotationForm from './annotation_form';

const mDTP = dispatch => ({
    action: (annotation) => dispatch(updateAnnotation(annotation)),
    fetchSong: (songId) => dispatch(fetchSong(songId))
});

export default connect(null, mDTP)(AnnotationForm);