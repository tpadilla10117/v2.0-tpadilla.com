import React from 'react';
import './Hero.scss';
/* import water from '../../../assets/videos/water.mp4'; */
import beach from '../../../assets/videos/beach.mp4';
/* import {EmailForm} from '../../utils'; */

const Hero = () => {
    return (
        <section id="hero-container">
            <div className='herobg'>
                <video className='videobg' autoPlay loop muted src={beach} type="video/mp4"></video>
            </div>
            <div className='herocontent'>
                <h1 className='hero-h1'>Contact</h1>
                <p className='hero-p'>Like what you see? Send me a message!</p>
            </div>
            
        </section>
    );
};

export default Hero;
