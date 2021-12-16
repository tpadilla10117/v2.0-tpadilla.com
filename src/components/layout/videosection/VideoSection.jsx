import React from 'react';
import './VideoSection.scss';
import beach from '../../../assets/videos/beach.mp4';
import {EmailForm} from '../../utils';

const VideoSection = () => {
    return (
        <section id="video-container">
            <div className='videoSection-bg'>
                <video className='videobg' autoPlay loop muted src={beach} type="video/mp4"></video>
            </div>
            <div className='videocontent'>
                {/* <h1 className='hero-h1'>Contact</h1>
                <p className='hero-p'>Sonme text</p> */}
                <EmailForm />
            </div>
            
        </section>
    );
};

export default VideoSection;
