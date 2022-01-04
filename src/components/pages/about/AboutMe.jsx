import React from 'react';
import './AboutMe.scss';
import Trin from '../../../assets/images/trin.jpg';
import { FaTwitter, FaLinkedin, FaBehance, FaGithub } from 'react-icons/fa';
import { Carousel, Footer, AboutHeroSection, PersonalCards } from '../../utils';
import { carouselData } from '../../../utils/seed';
import Hike from "../../../assets/images/hike.jpeg"
import GuitarSelfie from "../../../assets/images/GuitarSelfie.jpeg";
import SanDiego from "../../../assets/images/SanDiego.jpeg";
import FortBragg1 from "../../../assets/images/FortBragg1.jpeg";


const AboutMe = (props) => {

    const { cardState, changeCardState } = props;

    const cardInfo = [
        { id: 0, name: "card card-1", image: `${Hike}`, frontHeader: "Health", backHeader2: '"Health is Wealth"', backHeader3: "Peace of Mind", text: "I strive to not compete with anyone but myself while pushing forward to improve in each of my endeavors: A healthy mind & body, functional / nourshing relationships, and impactful work.", BackImage: `${FortBragg1}` },
        { id: 1, name: "card card-2",image: `${GuitarSelfie}`, frontHeader: "Guitarist", backHeader2: '"In the Deepest Ocean..."', backHeader3: "Music", text: "Performing and professional audio are two passions I cannot live without.  Whether it's rocking out to my favorite groove or indie jam, or analyzing the complex soundscapes of a recording, music is part of my identity. ", BackImage: `${FortBragg1}` },
        { id: 2, name: "card card-3",image: `${SanDiego}`, frontHeader: "Adventurer", backHeader2:'"Explore Everything!"' , backHeader3: "Traversing the Earth", text: "As a California native, I've dreamed of expanding my worldview beyond my suburban confounds.  Life is meant to be lived - there are countless people to meet, places to explore, and experiences to be had.  Find me at a beach, in a new city, or even another country.", BackImage: `${FortBragg1}` }
    ]

    return (
        <main id="aboutme-wrapper">
            <AboutHeroSection />
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
                                    <a href="https://www.linkedin.com/in/t-p-101/" className="links-socialicons">{<FaLinkedin /* size={45} *//>}</a>
                                    <a href="https://twitter.com/tpadilla101" className="links-socialicons">{<FaTwitter /* size={45} *//>}</a>
                                    <a href="https://github.com/tpadilla10117" className="links-socialicons">{<FaGithub /* size={45} *//>}</a>
                                    <a href="https://www.behance.net/tpadilla10117" className="links-socialicons">{<FaBehance /* size={45} *//>}</a>
                        </div>

                    </div>


                </div>
                

                
                {/* <div className="container">

                </div> */}

            </div>
            {/* <BlueBg > */}
                {/* <PersonalCards cardState={cardState} changeCardState={changeCardState}/> */}
            <Carousel /* slides={carouselData} */slides={cardInfo} cardInfo={cardInfo}cardState={cardState} changeCardState={changeCardState} />

            {/* </BlueBg> */}

            <Footer />
       
        </main>

        
    );
};

export default AboutMe;