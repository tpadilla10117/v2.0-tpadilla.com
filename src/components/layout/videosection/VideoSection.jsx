import React from 'react';
import './VideoSection.scss';
/* import beach from '../../../assets/videos/beach.mp4'; */
import water from '../../../assets/videos/water.mp4';

const VideoSection = () => {
    return (
        <section id="video-container">
            <div className='videoSection-bg'>
                <video className='videobg' autoPlay="autoPlay" loop="loop" muted="muted" preload="auto" playsInline="playsInline" src={water} type="video/mp4"></video>
            </div>
            <div className='videocontent'>
                <h1 className='hero-h1'>Developer</h1>
                <p className='hero-p'>Here is a collection of my web-development work:</p>
            </div>
            
        </section>
    );
};

export default VideoSection;
