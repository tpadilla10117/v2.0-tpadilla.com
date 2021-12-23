import React, { useState, useEffect } from 'react';
import { carouselData, carouselIndicatorData } from '../../../utils/seed';
import './Carousel.scss';

/* TODO:  12/7 need to finish up and then style: */
const Carousel = ( {slides} ) => {

    const [ current, setCurrent ] = useState(0);
    const length = slides.length;

/* This automatically updates the carousel after a designated time with setTimeout, a DOM Method: */
  /*   useEffect( () => {
        
        const time = setTimeout( () => {
            setCurrent(current === length - 1 ? 0 : current + 1);
        }, 6000);  */

    /* Effect cleanup: */
       /* return () => {
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

/* TODO: Need to use this function for arrows on the carousel: */
    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }   
/* console.log(current) */
    const exactSlide = (index) => {
        setCurrent(parseInt(index))
        console.log("Here is current: ", current) //is a string
    }

/* TODO: Functionality to navigate to clicked dot: */
    const navigateDots = event => {
        
        
        //First need to target the correct dot at the array index
            /* console.log(event.target.getAttribute('data-key')); */
            const arrayValues = event.target.getAttribute('data-key');
            console.log(arrayValues); //TODO: Gives me the index of the buttons

            if(arrayValues === current) {
                console.log("This is the current slide")
            }

            exactSlide(arrayValues); //updates current

            /* console.log("Here is current: ", current) */

            /* const targetSlide = document.querySelector('.slide'); */
            /* const targetSlide = arrayValues.classList; */
            /* console.log(targetSlide); */

        //Then need to find way to navigate to slide at that index on click
        //Each dot has it's own index, so we have to :
            //1) navigate to the index of the dot that's clicked
            //2) make sure the slide also navigates based on the dot that's clicked

    }
    
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
                            <button className={index === current ? 'indicator active' : 'indicator'} key={index} data-key={index} onClick={ navigateDots /* () => console.log(index) */ /* nextSlide */ }/>
                        )
                    })}
                </div>

            </section>

        </>
    );
};

export default Carousel;