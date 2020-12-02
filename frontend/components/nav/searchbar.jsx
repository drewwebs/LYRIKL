import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllSongs } from '../../actions/song_actions';

export default (props) => {

    const songs = useSelector(state => Object.values(state.entities.songs))
    const dispatch = useDispatch();
    const [searchResults, setSearchResults] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        dispatch(fetchAllSongs());
    }, []);

    const capitalize = (search) => {
        let words = search.toLowerCase().split(' ');
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(' ');
    };

    const handleChange = (e) => {
        if (e.currentTarget.value === "") {
            clearSearch();
        } else {
            let tempResults = e.currentTarget.value.length > 0 ? songs.filter((song) => song.title.includes(capitalize(e.currentTarget.value))) : [];
            setSearchText(e.currentTarget.value);
            setSearchResults(tempResults);
        }
    };

    const clearSearch = () => {
        setSearchText("");
        setSearchResults([]);
    };

    return (
        <form action="#" className="search-bar">
            <input value={searchText} onChange={handleChange} placeholder="Search lyrics & more" />
            <div className="search-icon">
                <i className="fas fa-search" />
            </div>
            {searchResults.length > 0 ? (
                <ul className="search-results">
                    <div className="search-results-header">SONGS</div>
                    {searchResults.map(song => <Link className="search-results-link" onClick={() => clearSearch()} to={`/songs/${song.id}`}>
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

