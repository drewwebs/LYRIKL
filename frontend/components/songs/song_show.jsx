import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import {referenceHandler, linkCreator} from '../../util/markdown_util';
import Annotation from '../annotations/annotation_show';
import CreateAnnotation from '../annotations/create_annotation_container';
import EditAnnotation from '../annotations/edit_annotation_form_container';
import getSelectionInfo from '../../util/selection_util';
import { Link } from 'react-router-dom';

export default class SongShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {annotation: "", annotationForm: "", annotationButton: false};
        this.displayAnnotation = this.displayAnnotation.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleFinish = this.handleFinish.bind(this);
        this.yOffset = 0;
        this.selection = "";
        this.addAnnotation = this.addAnnotation.bind(this);
        this.displayForm = this.displayForm.bind(this);
        this.removeAnnotationFromPage = this.removeAnnotationFromPage.bind(this);
    }

    componentDidMount() {
        this.props.fetchSong();        
        window.scrollTo(0,0);
    }

    handleSelect(e) {
        if (window.getSelection().toString() && e.target.nodeName !== "A" && window.getSelection().anchorNode.parentElement.parentElement.className === "song-show-body-lyrics") {
            debugger
            const selection = window.getSelection();
            const selectionInfo = getSelectionInfo(selection);
            this.setState( { annotationButton: true, annotationForm: "" } );
            this.selection = selectionInfo;
            this.yOffset = e.pageY;
        }
    }

    removeAnnotationFromPage() {
        this.setState({annotation: ""});
    }

    handleFinish() {
        this.setState( { annotationForm: "" });
    }

    addAnnotation(annotation) {
        this.setState({annotation});
    }

    displayAnnotation(e) {
        if (e.target.nodeName === "A") {
            this.yOffset = e.pageY;
            this.props.fetchAnnotation(e.target.id)
            .then(data => this.setState({annotation: data.annotation, annotationForm: ""}));
        } else {
            this.removeAnnotationFromPage();
        }
    }

    displayForm(type) {
        this.setState({annotationForm: type, annotationButton: false}, console.log(this.state.annotation));
    }

    render() {
        const loggedIn = !!this.props.currentUser;
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
                    <section className="song-show-body" onClick={this.displayAnnotation} onMouseUp={this.handleSelect}>
                        <ReactMarkdown 
                            className="song-show-body-lyrics"
                            children={this.props.song.lyrics} 
                            renderers={{linkReference: referenceHandler, 
                                        link: linkCreator}}
                            sourcePos={true}
                            />
                        <section className="song-show-body-annotations" onClick={(e) => e.stopPropagation()}>
                            {this.state.annotation ?  <Annotation 
                                                        annotation={this.state.annotation} 
                                                        yOffset={this.yOffset}
                                                        displayForm={this.displayForm} 
                                                        clearPage={this.removeAnnotationFromPage}
                                                      /> : ""}

                            {this.state.annotationButton ?  (loggedIn ?  <div 
                                                                            className="annotation-button" 
                                                                            onClick={ () => this.displayForm("create") }
                                                                            style={{position:`absolute`, top: `${this.yOffset}px`}}
                                                                        > <span>Start a LYRIKL Annotation</span><span className="annotation-button-green-text">(+5 IQ)</span></div> 
                                                                      : 
                                                                        <Link 
                                                                            className="annotation-button annotation-sign-in"
                                                                            style={{ position: `absolute`, top: `${this.yOffset}px` }}
                                                                            to="/login">
                                                                            Sign in to start annotating
                                                                        </Link>) : ""
                                                                        }

                            {this.state.annotationForm ? (this.state.annotationForm === "create" ? 
                                                            <CreateAnnotation 
                                                                handleFinish={this.handleFinish}
                                                                selection={this.selection}
                                                                songId={this.props.song.id}
                                                                yOffset={this.yOffset} 
                                                                addAnnotation={this.addAnnotation}
                                                                clearPage={this.removeAnnotationFromPage}
                                                            /> : 
                                                            <EditAnnotation
                                                                handleFinish={this.handleFinish}
                                                                yOffset={this.yOffset}
                                                                addAnnotation={this.addAnnotation}
                                                                annotation={this.state.annotation}
                                                                clearPage={this.removeAnnotationFromPage}
                                                            />
                                                            ) : ""}
                        </section>
                    </section>
                </div>
            </div>
        ) : (
            <div className="song-show">Loading Song...</div>
        )
    }
}

