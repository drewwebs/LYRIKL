import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import {referenceHandler, linkCreator} from '../../util/markdown_util';

export default class SongShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSong();
        window.scrollTo(0,0);
    }

    render() {
        return this.props.song ? (
            <div className="song-show">
                <div className="song-show-header-container-background" style={{ backgroundImage:`url(${this.props.song.image_url})` }}>
                    <div className="song-show-header-container">
                        <section className="song-show-header">
                            <img className="song-show-header-img" src={`${this.props.song.image_url}`} alt=""/>
                            <div className="song-show-header-details">
                                <h1 className="song-show-header-details-title">{this.props.song.title}</h1>
                                <h2 className="song-show-header-details-artist">{this.props.song.artist}</h2>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="song-show-body-container">
                    <section className="song-show-body">
                        <ReactMarkdown 
                            className="song-show-body-lyrics"
                            source={this.props.song.lyrics} 
                            renderers={{linkReference: referenceHandler, 
                                        link: linkCreator}}
                            />
                        <section className="song-show-body-annotations"></section>
                    </section>
                </div>
            </div>
        ) : (
            <div className="song-show">Loading...</div>
        )
    }
}


