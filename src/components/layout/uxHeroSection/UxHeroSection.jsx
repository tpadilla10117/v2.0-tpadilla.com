import React from 'react';
import './UxHeroSection.scss';
/* import beach from '../../../assets/videos/beach.mp4'; */
import uxbeach from '../../../assets/images/uxbeach.jpg';

const UxHeroSection = () => {
    return (
        <section id="video-container">
            <div className='videoSection-bg'>
                <img className='videobg' src={uxbeach} alt='Cabanas along a beach' /* autoPlay loop muted src={water} type="video/mp4" *//>
            </div>
            <div className='videocontent'>
                <h1 className='hero-h1'>Developer</h1>
                <p className='hero-p'>Here is a collection of some of my web-development work:</p>
            </div>
            
        </section>
    );
};

export default UxHeroSection;
