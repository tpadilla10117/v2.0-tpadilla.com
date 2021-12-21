import React from 'react';
import './UxHeroSection.scss';
/* import beach from '../../../assets/videos/beach.mp4'; */
import uxbeach from '../../../assets/images/uxbeach.jpg';

const UxHeroSection = () => {
    return (
        <section id="ux-hero-container">
            <div className='ux-heroSection-bg'>
                <img className='ux-hero-img' src={uxbeach} alt='Cabanas along a beach' /* autoPlay loop muted src={water} type="video/mp4" *//>
            </div>
            <div className='ux-hero-content'>
                <h1 className='ux-hero-h1'>Developer</h1>
                <p className='ux-hero-p'>Here is a collection of some of my web-development work:</p>
            </div>
            
        </section>
    );
};

export default UxHeroSection;
