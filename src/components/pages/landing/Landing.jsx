import React from 'react';
import "./Landing.scss";

import hike from "../../../assets/images/hike.jpeg";
import resume from "../../../assets/images/resume.png";

const Landing = () => {


    const landingOptions = [
        {
          id: 1,
          title: "About",
          img: `${hike}`
        },
        {
            id: 2,
            title: "Developer",
            img: `${hike}`
        },
        {
            id: 3,
            title: "UX Designer",
            img: `${hike}`
        },
        {
            id: 4,
            title: "Contact",
            img: `${hike}`
        },
        {
            id: 5,
            title: "Resume",
            img: `${resume}`
        }
      ];



    return (
        <main>
        
            {/* TODO: Style the divs */}

            <section className="landing-section">
                
                {landingOptions.map(landingImage => {
                    return (
                        <div id={landingImage.id} key={landingImage.id} className="landing-CardBox">
                            <div className="landing-imgWrapper">
                                <img src={landingImage.img} alt="" />
                            </div>
                    
                            {/* <div className="landing-detailsBox">  */}
                                <div className="landing-contentBox">
                                    <p className="landing-cardText">{landingImage.title}</p>
                                    
                                </div>

                            {/* </div> */}
            
                        </div>
                    )
                })}

            </section>

           


        </main>
    );
};

export default Landing;