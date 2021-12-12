import React from 'react';
import './Hero.scss';
import water from '../../../assets/videos/water.mp4';

const Hero = () => {
    return (
        <section id="hero-container">
            <div className='herobg'>
                <video className='videobg' autoPlay loop muted src={water} type="video/mp4"></video>
            </div>
            <div className='herocontent'>
                <h1 className='hero-h1'>Contact</h1>
                <p className='hero-p'>Sonme text</p>
            </div>
            
        </section>
    );
};

export default Hero;
