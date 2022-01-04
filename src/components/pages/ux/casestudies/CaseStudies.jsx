import React, {useState, useEffect} from 'react';


const CaseStudies = () => {

    /* 1) set the date im counting to */
    let countDownDate = () => {
        /* Get the current year: */
        let year = new Date().getFullYear();
        
        /* Calculate difference in time between target date and current date: */
        /* + before new Date is shorthand to cast obj as integer -> yuelkds Unix timestamp in microseconds */

        const difference = +new Date(`${year}-01-31`) - +new Date();

        /* console.log("Value from difference: ", difference) */

        /* Calculate the remaining time: */
        let timeRemaining = {};

        if (difference > 0) {
            timeRemaining = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        /* console.log(timeRemaining); */
        return timeRemaining;
    };

    const [timeRemaining, setTimeRemaining] = useState(countDownDate());

    useEffect(() => {
        const timer = setTimeout( () => {
            setTimeRemaining(countDownDate() );
        }, 1000);

        return () => clearTimeout(timer);
    });

    /* Used for the UI elements: */
    const countdownComponents = [];
    
    

    return (
        <div>
            Hello World.
        </div>
    );
};

export default CaseStudies;
