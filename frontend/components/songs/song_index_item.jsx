import React from 'react';
import {Link} from 'react-router-dom';


export default (props) => (
    (
        <Link className="charts-song" to={`/songs/${props.song.id}`}>
            <div className="charts-song-details">
                <img className="charts-song-cover" src={`${props.song.image_url}`} alt="" />
                <p className="charts-song-title">{props.song.title}</p>
            </div>
            <p className="charts-song-artist">{props.song.artist}</p>
            <p className="charts-song-view-count">
                <span className={props.song.fire ? "" : "hidden"}>
                    <i className="charts-fire fab fa-free-code-camp"></i>
                </span>
                {props.song.view_count}
            </p>
        </Link>
    )
)

