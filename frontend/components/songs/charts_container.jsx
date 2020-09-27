import { fetchAllSongs } from '../../util/song_util';
import { connect } from 'react-redux';
import Charts from './charts';

const mSTP = ({entities}) => ({
    songs: Object.values(entities.songs)
});

const mDTP = dispatch => ({
    fetchAllSongs: () => dispatch(fetchAllSongs())
});

export default connect(mSTP, mDTP)(Charts);