import React from 'react';
import {Link} from 'react-router-dom';
export const referenceHandler = (reference) => {
    // debugger
    if (!reference.href) {
        return '[' + reference.children[0].props.value + ']';
    }
    debugger
    return <a href={reference.$ref}>{reference.children}</a>
}

export const linkCreator = (reference) => {
    const parsed = []
    reference.children.forEach( child => child.type === "br" ? parsed.push("<br />") : parsed.push(child.props.value) )
    
    return (
      <Link id={`${reference.href}`} to="#"> 
      {/* {`/annotations/${reference.href}`}> */}
        {reference.children.map( child => child.type === "br" ? <br /> : child.props.value )}
      </Link>
    );
}
