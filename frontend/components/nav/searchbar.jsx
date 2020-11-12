import React from 'react';
import { Link } from 'react-router-dom';

export default class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchResults: false, searchText: "", songs: [] };
        this.handleChange = this.handleChange.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllSongs();
    }

    handleChange() {
        const capitalize = (search) => {
            let words = search.toLowerCase().split(' ');
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
            }
            return words.join(' ');
        };

        return e => {
            if (e.currentTarget.value === "") {
                this.clearSearch();
            } else {
                this.setState({
                    searchText: e.currentTarget.value,
                    songs: e.currentTarget.value.length > 0 ? this.props.songs.filter((song) => song.title.includes(capitalize(e.currentTarget.value))) : []
                });
            }
        };
    }

    clearSearch() {
        this.setState( { searchText: "", songs: [] });
    }

    render() {
        return (
            <form action="#" className="search-bar">
                <input value={this.state.searchText} onChange={this.handleChange()} placeholder="Search lyrics & more" />
                <div className="search-icon">
                    <i className="fas fa-search" />
                </div>
                {this.state.songs.length > 0 ? (
                    <ul className="search-results">
                        <div className="search-results-header">SONGS</div>
                        {this.state.songs.map(song => <Link className="search-results-link" onClick={this.clearSearch} to={`/songs/${song.id}`}>
                            <div className="search-results-song">
                                <img className="search-results-song-album-image" src={song.image_url} />
                                <div className="search-results-song-details">
                                    <p className="search-results-song-details-artist">{song.artist}</p>
                                    <p className="search-results-song-details-title">{song.title}</p>
                                    <p className="search-results-song-view-count">
                                        <span className={song.fire ? "" : "hidden"}>
                                            <i className="search-fire fab fa-free-code-camp"></i>
                                        </span>
                                        {song.view_count}
                                    </p>
                                </div>
                                <br />
                            </div>
                        </Link>)}
                    </ul>) : ""}
            </form>
        )
    }
}

