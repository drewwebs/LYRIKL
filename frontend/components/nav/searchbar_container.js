import { fetchAllSongs } from '../../actions/song_actions';
import { connect } from 'react-redux';
import Searchbar from './searchbar';

const mSTP = ( { entities } ) => ({
    songs: Object.values(entities.songs)
});

const mDTP = (dispatch) => ({
    fetchAllSongs: () => dispatch(fetchAllSongs())
});

export default connect(mSTP, mDTP)(Searchbar);