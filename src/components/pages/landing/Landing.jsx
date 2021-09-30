import React from 'react';
import "./Landing.scss";

import hike from "../../../assets/images/hike.jpeg";

const Landing = () => {


    const landingOptions = [
        {
          id: 1,
          title: "About",
          img: `${hike}`
        },
        {
            id: 2,
            title: "Developer"
        },
        {
            id: 3,
            title: "UX Designer"
        },
        {
            id: 4,
            title: "Contact"
        },
        {
            id: 5,
            title: "Resume"
        }
      ];



    return (
        <main>
            <h1>Greetings from Landing</h1>

            {/* TODO: Style the divs */}

            <section className="landing-section">
                
                {landingOptions.map(landingImage => {
                    return (
                        <div id={landingImage.id} key={landingImage.id} className="landing-CardBox">
                            <div className="landing-imgWrapper">
                                <img src={landingImage.img} alt="" />
                            </div>
                    
                            <div className="landing-detailsBox"> 
                                <div className="landing-contentBox">
                                    <p className="landing-cardText">{landingImage.title}</p>
                                    
                                </div>

                            </div>
            
                        </div>
                    )
                })}

            </section>

           


        </main>
    );
};

export default Landing;