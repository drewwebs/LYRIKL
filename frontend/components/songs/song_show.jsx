import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import {referenceHandler, linkCreator} from '../../util/markdown_util';
import Annotation from '../annotations/annotation_show';
import CreateAnnotation from '../annotations/create_annotation_container';
import EditAnnotation from '../annotations/edit_annotation_form_container';
import getSelectionInfo from '../../util/selection_util';
import SessionModal from '../session/session_modal';

import { fetchAnnotation } from '../../actions/annotation_actions';

export default (props) => {
    const loggedIn = !!useSelector(state => state.session.currentUser);
    const song = useSelector(state => state.entities.songs[props.match.params.songId]);
    
    const dispatch = useDispatch();

    const [annotation, setAnnotation] = useState("");
    const [annotationForm, setAnnotationForm] = useState("");
    const [annotationButton, setAnnotationButton] = useState(false);
    const [yOffset, setYOffset] = useState(0);
    const [selection, setSelection] = useState("");
    const [sessionForm, setSessionForm] = useState(false);
    const [sessionFormType, setSessionFormType] = useState("login");

    useEffect(() => {    
        window.scrollTo({top: 0, left: 0});
    }, [] );

    const handleSelect = (e) => {
        if (
            window.getSelection().toString() &&
            e.target.nodeName !== "A" &&
            window.getSelection().anchorNode.parentElement.parentElement.className === "song-show-body-lyrics" && 
            window.getSelection().focusNode.nodeName !== "P"
        ) {
            setAnnotationButton(true);
            setAnnotationForm("");
            setSelection(getSelectionInfo(window.getSelection()));
            setYOffset(e.pageY);
        } else if (e.target.id !== "annotation-button") {
            setAnnotationButton(false);
        }
    };

    const removeAnnotationFromPage = () => {
        setAnnotation("");
    };


    const removeHighlight = () => {
        const targeted = document.getElementsByClassName("targeted")[0];
        if (targeted) targeted.classList.remove("targeted");
    };

    const displayAnnotation = (e) => {
        if (e.target.nodeName === "A") {
            removeHighlight();
            e.target.classList.add("targeted");
            setYOffset(e.pageY);
            dispatch(fetchAnnotation(e.target.id))
            .then(data => {
                setAnnotation(data.annotation);
                setAnnotationForm("");
            });
        } else {
            removeHighlight();
            removeAnnotationFromPage();
        }
    };

    const displayForm = (type) => {
        setAnnotationForm(type);
        setAnnotationButton(false);
    };

    return (
        song ? (
            <div className="song-show" >
                {sessionForm ? <SessionModal formType={sessionFormType} setFormType={setSessionFormType} closeForm={() => setSessionForm(false)} /> : ""}
                <div className="song-show-header-container-background" style={{ backgroundImage:`url(${song.image_url})` }}>
                    <div className="song-show-header-container">
                        <section className="song-show-header">
                            <img className="song-show-header-img" src={`${song.image_url}`} alt=""/>
                            <div className="song-show-header-details">
                                <h1 className="song-show-header-details-title">{song.title}</h1>
                                <h2 className="song-show-header-details-artist">{song.artist}</h2>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="song-show-body-container" >
                    <section className="song-show-body" onClick={displayAnnotation} onMouseUp={handleSelect}>
                        <ReactMarkdown 
                            className="song-show-body-lyrics"
                            children={song.lyrics} 
                            renderers={{linkReference: referenceHandler, 
                                        link: linkCreator}}
                            sourcePos={true}
                            />
                        <section className="song-show-body-annotations" onClick={e => e.stopPropagation()}>
                            {annotation ?  <Annotation 
                                                        annotation={annotation} 
                                                        yOffset={yOffset}
                                                        displayForm={displayForm} 
                                                        clearPage={removeAnnotationFromPage}
                                                        addAnnotation={setAnnotation}
                                                        key={annotation.id}
                                                      /> : ""}

                            {annotationButton ?  (loggedIn ?  <div 
                                                                            id="annotation-button"
                                                                            className="annotation-button" 
                                                                            onClick={ () => displayForm("create") }
                                                                            style={{position:`absolute`, top: `${yOffset}px`}}
                                                                        > <span id="annotation-button">Start a LYRIKL Annotation</span><span id="annotation-button" className="annotation-button-green-text">(+5 IQ)</span></div> 
                                                                      : 
                                                                        <span 
                                                                            onClick={() => setSessionForm(true)}
                                                                            id="annotation-button"
                                                                            className="annotation-button annotation-sign-in"
                                                                            style={{ position: `absolute`, top: `${yOffset}px` }}
                                                                            >
                                                                            Sign in to start annotating
                                                                        </span>) : ""
                                                                        }

                            {annotationForm ? (annotationForm === "create" ? 
                                                            <CreateAnnotation 
                                                                setAnnotationForm={setAnnotationForm}
                                                                selection={selection}
                                                                songId={song.id}
                                                                yOffset={yOffset} 
                                                                setAnnotation={setAnnotation}
                                                            /> : 
                                                            <EditAnnotation
                                                                setAnnotationForm={setAnnotationForm}
                                                                yOffset={yOffset}
                                                                setAnnotation={setAnnotation}
                                                                annotation={annotation}
                                                            />
                                                            ) : ""}
                        </section>
                    </section>
                </div>
            </div>
        ) : (
            <div className="song-show">Loading Song...</div>
        )
    );
}

