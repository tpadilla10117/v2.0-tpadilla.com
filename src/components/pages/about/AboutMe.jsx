import React from 'react';
import './AboutMe.scss';
import Trin from '../../../assets/images/trin.jpg';
import { SiGithub, SiLinkedin, /* SiInstagram, SiFacebook, */ SiBehance, SiTwitter  } from "react-icons/si";
import { Carousel, BlueBg } from '../../utils';
import { carouselData } from '../../../utils/seed';

const AboutMe = (props) => {

    return (
        <>
            <div id="mainPage-wrapper">
                <div className="bio-wrapper">

                {/* THIS IS FOR THE IMAGE OF ME*/}
                    <div className="overlay-practice">
                        <div className="img-box">
                            <div className="img-container">
                                <img 
                                    src={Trin} 
                                    className="about-picture" 
                                    alt="Trin Padilla" 
                                    loading="lazy" 
                                    id="leftiimage">

                                </img>

                            </div>
                            <div className="img-content">
                                <div>
                                    <p>Hey There! I'm Trin!</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="sideBio">
                        <h1 className="sideBio-heading1">Jr Full Stack UX Engineer</h1><br/>
                        <p>I'm a Jack-of-All-Trades: "Master of None though oftentimes better than a Master of One" type who's dedicated his life to both learning and specializing in the following trades: Full Stack Web-Development and UX Design.  I find myself fascinated with both the creative arts and problem solving.  I have a knack for rapid ideation and creativity in each area of focus.  Users experience web-applications every day, and one of my many responsibilities is to ensure those user experiences are profound, memorable, and intuitive (to name a few).  Whether behind pen & paper, Figma, or VS Code, it's my duty to convey these experiences in a manner that users will enjoy!  Get to know a bit more about me and my work below through my socials below!   </p>
                        <br/>
                        <h2 className="sideBio-heading2">Going With the Flow</h2>
                        <br/>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>


                        <div className="links-about">
                                    <a href="https://github.com/tpadilla10117" className="github">{<SiGithub size={45}/>}</a>
                                    <a href="https://www.behance.net/tpadilla10117" className="behance">{<SiBehance size={45}/>}</a>
                                    <a href="https://twitter.com/tpadilla101" className="twitter">{<SiTwitter size={45}/>}</a>
                                    <a href="https://www.linkedin.com/in/t-p-101/" className="linkedin">{<SiLinkedin size={45}/>}</a>
                        </div>

                    </div>


                </div>
                

                
                {/* <div className="container">

                </div> */}

            </div>
            {/* <BlueBg > */}

            <Carousel slides={carouselData} />

            {/* </BlueBg> */}
       
        </>

        
    );
};

export default AboutMe;