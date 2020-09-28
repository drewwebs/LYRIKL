import React from 'react';
import {Link} from 'react-router-dom';


export default (props) => (
    (
        <Link className="charts-song" to={`/songs/${props.song.id}`}>
            <img className="charts-song-cover" src={`${props.song.image_url}`} alt=""/>
            <p className="charts-song-title">{props.song.title}</p>
            <p className="charts-song-artist">{props.song.artist}</p>
            <i className="fab fa-free-code-camp"></i>
            <p className="charts-song-view-count">{props.song.view_count}</p>
        </Link>
    )
)

