import react from "react"
import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className="news">
        <Link to="#" className="news-story">
        <span className="news-header">
            News
            <div />
        </span>
        <h1>
            Kanye West promises new album with one shocking twist
        </h1>
        <p>
            Kanye unveiled his new project today, titled "Ruff Crowd".
            He promised the album would be an instant banger, with one
            caveat: it'll be recorded at a frequency that humans can't
            hear. When asked how he himself would know what it sounded
            like, Kanye winked and simply replied: <em>"woof."</em>
        </p>
        <div className="news-footer">
            <span className="news-footer-author">
            by Drew Webster /{" "}
            </span>
            <span className="news-footer-published-date">
            Sep 24 2020
            </span>
        </div>
        </Link>
        <img className="news-image" src={window.kanyeURL} alt="#" />
    </div>
)