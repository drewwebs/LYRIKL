import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import {referenceHandler, linkCreator} from '../../util/markdown_util';

export default class SongShow extends React.Component {
    constructor(props) {
        // debugger
        super(props);
        this.state = {annotation: ""};
    }

    componentDidMount() {
        this.props.fetchSong();        
        window.scrollTo(0,0);
    }

    handleClick(e) {
        e.preventDefault();
        if (e.target.nodeName === "A") {
            console.log("here we are")
        }
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
                    <section className="song-show-body" onClick={this.handleClick}>
                        <ReactMarkdown 
                            className="song-show-body-lyrics"
                            source={this.props.song.lyrics} 
                            renderers={{linkReference: referenceHandler, 
                                        link: linkCreator}}
                            />
                        <section className="song-show-body-annotations">
                            {this.props.annotation ? <Annotation annotation={this.props.fetchAnnotation()} /> : ""}
                        </section>
                    </section>
                </div>
            </div>
        ) : (
            <div className="song-show">Loading Song...</div>
        )
    }
}


