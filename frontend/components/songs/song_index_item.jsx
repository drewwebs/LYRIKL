import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
    return (
        <li>
            <Link>
                <p>{props.title}</p>
                <p>{props.artist}</p>
                <p>{props.view_count}</p>
                <p></p>
            </Link>
        </li>
    )
};