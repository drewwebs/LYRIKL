import React from 'react';
import { Link } from 'react-router-dom';
import SongIndexItem from './song_index_item.jsx';

export default class Charts extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.songs;
    }

    componentDidMount() {
        this.props.fetchAllSongs();
    }

    render() {
        return (
            <ul className="charts">
                {this.props.songs.map( song => (
                    // const {id, title, artist, view_count, fire} = song
                    <SongIndexItem
                        key={song.id}
                        id={song.id}
                    />)
                )
                }
            </ul>
        )
    }
}