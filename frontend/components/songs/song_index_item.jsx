import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchSong, fetchArtwork } from '../../actions/song_actions'; 

class SongIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {song: props.song};
    }

    componentDidMount() {
        this.props.fetchSong()
        .then( data => this.props.fetchArtwork(data.song))
        .then(data => this.setState({song: data.song}));
    }

    render() {
        return this.state.song.image_url ? (
            <Link className="charts-song" to={`/songs/${this.state.song.id}`}>
                <img className="charts-song-cover" src={`${this.state.song.image_url}`} alt=""/>
                <p className="charts-song-title">{this.state.song.title}</p>
                <p className="charts-song-artist">{this.state.song.artist}</p>
                <i className="fab fa-free-code-camp"></i>
                <p className="charts-song-view-count">{this.state.song.view_count}</p>
            </Link>
        ) : (
            <div>Loading...</div>
        )
    }
};

const mSTP = ({entities}, ownProps) => ({
    song: entities.songs[ownProps.id]
})

const mDTP = (dispatch, ownProps) => {
    return {
        fetchSong: () => dispatch(fetchSong(ownProps.id)),
        fetchArtwork: (song) => dispatch(fetchArtwork(song))
    }
}

export default connect(mSTP, mDTP)(SongIndexItem)