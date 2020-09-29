import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import {referenceHandler, linkCreator} from '../../util/markdown_util';
import Annotation from '../annotations/annotation_show';

export default class SongShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {annotation: "", yOffset: 0};
        this.displayAnnotation = this.displayAnnotation.bind(this);
    }

    componentDidMount() {
        this.props.fetchSong();        
        window.scrollTo(0,0);
    }

    displayAnnotation(e) {
        e.preventDefault();
        // debugger;
        if (e.target.nodeName === "A") {
            this.setState({yOffset: e.pageY});
            this.props.fetchAnnotation(e.target.id)
            .then(data => this.setState({annotation: data.annotation}));
        } else {
            this.setState({annotation: ""});
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
                    <section className="song-show-body" onClick={this.displayAnnotation}>
                        <ReactMarkdown 
                            className="song-show-body-lyrics"
                            source={this.props.song.lyrics} 
                            renderers={{linkReference: referenceHandler, 
                                        link: linkCreator}}
                            />
                        <section className="song-show-body-annotations">
                            {this.state.annotation ? <Annotation annotation={this.state.annotation} yOffset={this.state.yOffset} /> : ""} {/* set X offset based on click event? */}
                        </section>
                    </section>
                </div>
            </div>
        ) : (
            <div className="song-show">Loading Song...</div>
        )
    }
}

