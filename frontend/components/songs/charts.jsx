import React from 'react';
import { Link } from 'react-router-dom';
import SongIndexItem from './song_index_item.jsx';

export default class Charts extends React.Component {
    constructor(props) {
        super(props);
        this.chartsRef = React.createRef();
    }

    componentDidMount() {
        this.props.fetchAllSongs();
    }

    render() {
        return (
          <div ref={this.chartsRef} className="charts-background">
            <ul className="charts">
              <h1 className="charts-header">Charts</h1>
              <h2 className="charts-sub-header">Trending on LYRIKL</h2>
              {this.props.songs.map((song) => (
                // const {id, title, artist, view_count, fire} = song
                <SongIndexItem 
                    key={song.id}
                    song={song} />
              ))}
            </ul>
          </div>
        );
    }
}