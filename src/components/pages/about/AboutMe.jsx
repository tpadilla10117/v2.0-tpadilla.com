import React from 'react';
import './AboutMe.scss';
import Trin from '../../../assets/images/trin.jpg';

const AboutMe = (props) => {
    return (
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

                </div>


            </div>

        </div>
    );
};

export default AboutMe;