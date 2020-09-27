import React from 'react';
import { Link } from 'react-router-dom';
import SongIndexItem from './song_index_item.jsx';

export default class Charts extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllSongs();
    }

    render() {
        return (
            <ul>
                {this.props.songs.map( song => {
                    const {title, artist, view_count, fire} = song
                    return (<SongIndexItem 
                        title={title}
                        artist={artist}
                        view_count={view_count}
                        fire={fire}
                    />)
                })
                }

            </ul>
        )
    }
}