import React from 'react';
import {Link} from 'react-router-dom';
import SongShow from '../components/songs/song_show';

export const referenceHandler = (reference) => {
    if (!reference.href) {
        return '[' + reference.children[0].props.value + ']';
    }
    return <a href={reference.$ref}>{reference.children}</a>
}

export const linkCreator = (reference) => {
    const parsed = []
    reference.children.forEach( child => child.type === "br" ? parsed.push("<br />") : parsed.push(child.props.value) )
    
    return (
      <button id={`${reference.href}`} className="annotation-element"> 
        {reference.children.map( child => child.type === "br" ? <br /> : child.props.value )}
      </button>
    );
}
