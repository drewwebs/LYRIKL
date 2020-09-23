import React from 'react';
import { Link } from 'react-router-dom';

export default class Featured extends React.Component {
    render() {
        return (
        <section className="featured">
            <div className="news">
                <Link to="#" className="news-story">
                    <span className="news-header">News</span>
                    <h1>Local man struggles with CSS</h1>
                    <p>After hours of styling his website, Drew Webster is still st</p>
                </Link>
                <img className="news-image" src={window.earlURL} alt="#"/>
            </div>

        </section>
        )
    }
}