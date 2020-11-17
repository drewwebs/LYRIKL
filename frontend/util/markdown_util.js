import React from 'react';

export const referenceHandler = (reference) => {
    if (!reference.href) {
        return '[' + reference.children[0].props.value + ']';
    }
    return <a href={reference.$ref}>{reference.children}</a>
}

export const linkCreator = (reference) => (
    <button id={`${reference.href}`} className="annotation-element"> 
      {reference.children.map( (child) => child.type === "br" ? <br /> : child.props.value )}
    </button>
)
