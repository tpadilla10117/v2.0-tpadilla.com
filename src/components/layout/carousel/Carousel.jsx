import React, { useState, useEffect } from 'react';
import { carouselData, carouselIndicatorData } from '../../../utils/seed';
import './Carousel.scss';

/* TODO:  12/7 need to finish up and then style: */
const Carousel = ( {slides} ) => {

    const [ current, setCurrent ] = useState(0);
    const length = slides.length;

/* This automatically updates the carousel after a designated time with setTimeout, a DOM Method: */
   /*  useEffect( () => {
        
        const time = setTimeout( () => {
            setCurrent(current === length - 1 ? 0 : current + 1);
        }, 6000); */

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
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

/* TODO: Need to use this function for arrows on the carousel: */
    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }   

    /* console.log("Here is the current slide: ", current) */
    return (
        <>
             <section id="carousel-wrapper">
                {/* Arrow */}
                {/* Arrow */}

                {carouselData.map( (slide, index) => {
                return (
                    <div id="carousel-img-wrapper" className={index === current ? 'slide active' : 'slide'} key={index} >
                        {index === current && (<img src={slide.image} alt="travel" key={index} className='slider-image' />)}
                        
                    </div>
                    
                )
            })}

            {/* For the Indicator buttons below: */}
                <div className="carousel-nav" >
                    {carouselIndicatorData.map( (slide, index) => {
                        return (
                            <button id="carousel-btn-indicator" className={index === current ? 'indicator active' : 'indicator'} key={index} onClick={nextSlide}/>
                        )
                    })}
                </div>

            </section>

        </>
    );
};

export default Carousel;