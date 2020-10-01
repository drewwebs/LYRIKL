import React from 'react';

export default ({annotation, yOffset}) => {

    return (
        <div className="song-show-body-annotations-display" style={{position:`absolute`, top: `${yOffset}px`}}>
            <p className="song-show-body-annotations-display-body">
                {annotation.body}
            </p>
            <footer className="news-footer">
                <div className="news-footer-author">Annotation by {annotation.author.username}</div>
            </footer>
            
        </div>
    )
}