import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainStory from './main_story';
import SubStories from './sub_stories';

export default () => {
    const featuredRef = useRef(null);
    const location = useLocation();
    
    useEffect(() => {
        if (location.pathname === "/featured") {
            window.scrollTo({
                behavior: "smooth",
                top: featuredRef.current.offsetTop
            });
        }
    });

    return (
        <section ref={featuredRef} className="featured">
            <MainStory />
            <SubStories />
        </section>
    )
}