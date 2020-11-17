import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchAllSongs } from '../../actions/song_actions';
import SongIndexItem from './song_index_item.jsx';

export default () => {

    const [numSongs, setNumSongs] = useState(10);
    const dispatch = useDispatch();
    const chartsRef = useRef();
    const location = useLocation();
    const songs = useSelector(state => Object.values(state.entities.songs));

    useEffect(() => {
        dispatch(fetchAllSongs());
    }, []);

    useEffect(() => {
      if (location.pathname === "/charts") {
        window.scrollTo({
          behavior: "smooth",
          top: chartsRef.current.offsetTop
        });
      }
    }, location.pathName);
   

    
    return (
      <div ref={chartsRef} className="charts-background">
        <ul className="charts">
          <h1 className="charts-header">Charts</h1>
          <h2 className="charts-sub-header">Trending on LYRIKL</h2>
          {songs.slice(0, numSongs).map((song) => (
            <SongIndexItem 
                key={song.id}
                song={song} />
          ))}
          {songs.length > numSongs ? 
            <button className="charts-button" onClick={() => setNumSongs( numSongs + 10 )}>Load More</button>
            :
            ""
          }
        </ul>
      </div>
    );
}