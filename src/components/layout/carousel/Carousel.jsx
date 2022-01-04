import React, { useState, useEffect } from 'react';
import { carouselData, carouselIndicatorData } from '../../../utils/seed';
import chevronRight from '../../../assets/icons/chevron-right.svg';
import chevronLeft from '../../../assets/icons/chevron-left.svg';
import './Carousel.scss';
import { PersonalCards } from '../../utils';

/* import Hike from "../../../assets/images/hike.jpeg"
import GuitarSelfie from "../../../assets/images/GuitarSelfie.jpeg";
import SanDiego from "../../../assets/images/SanDiego.jpeg";
import FortBragg1 from "../../../assets/images/FortBragg1.jpeg";
 */
/* TODO:  12/7 need to finish up and then style: */
const Carousel = ( {slides, cardState, changeCardState, cardInfo} ) => {

    const [ current, setCurrent ] = useState(0);
    const length = slides.length;
console.log(slides)
   /*  const cardInfo = [
        { id: 0, name: "card card-1", image: `${Hike}`, frontHeader: "Health", backHeader2: '"Health is Wealth"', backHeader3: "Peace of Mind", text: "I strive to not compete with anyone but myself while pushing forward to improve in each of my endeavors: A healthy mind & body, functional / nourshing relationships, and impactful work.", BackImage: `${FortBragg1}` },
        { id: 1, name: "card card-2",image: `${GuitarSelfie}`, frontHeader: "Guitarist", backHeader2: '"In the Deepest Ocean..."', backHeader3: "Music", text: "Performing and professional audio are two passions I cannot live without.  Whether it's rocking out to my favorite groove or indie jam, or analyzing the complex soundscapes of a recording, music is part of my identity. ", BackImage: `${FortBragg1}` },
        { id: 2, name: "card card-3",image: `${SanDiego}`, frontHeader: "Adventurer", backHeader2:'"Explore Everything!"' , backHeader3: "Traversing the Earth", text: "As a California native, I've dreamed of expanding my worldview beyond my suburban confounds.  Life is meant to be lived - there are countless people to meet, places to explore, and experiences to be had.  Find me at a beach, in a new city, or even another country.", BackImage: `${FortBragg1}` }
    ] */

/* This automatically updates the carousel after a designated time with setTimeout, a DOM Method: */
   /*  useEffect( () => {
        
        const time = setTimeout( () => {
            setCurrent(current === length - 1 ? 0 : current + 1);
        }, 6000);  */

    /* Effect cleanup: */
      /*  return () => {
            clearTimeout(time);
        }
    }, [current, length]); */

/* If no data, or our array isn't an array, return null: */
    if(!Array.isArray(slides) || slides.length <= 0 ) {
        return null;
    }

    
/* Logic for navigating to next or previous slide in carousel: */
    const nextSlide = () => {
        //if it's at index 2, reset back to 0, elkse add 1 and proceed throughout array"
            setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }   
/* Helper Function to navigate to exact slide in carousel: */

    const exactSlide = (index) => {
        setCurrent(parseInt(index))
        /* console.log("Here is current: ", current) */ //is a string
    }

/* Functionality to navigate to clicked dot: */
    const navigateDots = event => {
        
        //First need to target the correct dot at the array index
            const arrayValues = event.target.getAttribute('data-key');
            console.log(arrayValues); //TODO: Gives me the index of the buttons

            if(arrayValues === current) {
                console.log("This is the current slide")
            }

            exactSlide(arrayValues); //updates current
    };
    
    return (
        
             <section id="carousel-wrapper">
                 {/* <div className='carousel-container'> */}
                <div className='arrow-container'>

                    {/* Right Arrow : */}
                    <img className="right-arrow" src={chevronRight} alt="" onClick={nextSlide}/>
                    {/* Left Arrow: */}
                    <img className="left-arrow" src={chevronLeft} alt="" onClick={previousSlide}/>
                </div>

                    {/* carouselData */cardInfo.map( (slide, index) => {
                    return (
                        <div className={index === current ? 'carousel-img-wrapper slide active' : 'carousel-img-wrapper slide'} key={index} >
                            {index === current && (<PersonalCards image={slide.image} cardState={cardState} changeCardState={changeCardState} current={current} cardInfo={cardInfo} key={index} id={index} frontHeader={slide.frontHeader} backHeader2={slide.backHeader2} backHeader3={slide.backHeader3} text={slide.text} BackImage={slide.BackImage} name={slide.name} />)/* (<img src={slide.image} alt="travel" key={index} className='slider-image' />) */}
                            
                        </div>
                        
                    )
                    })}

                {/* For the Indicator buttons below: */}
                    <div className="carousel-nav" >
                        {carouselIndicatorData.map( (slide, index) => {
                            return (
                                <button className={index === current ? 'indicator active' : 'indicator'} key={index} data-key={index} onClick={ navigateDots}/>
                            )
                        })}
                    </div>

                 {/* </div> */}
                </section>

        
    );
};

export default Carousel;