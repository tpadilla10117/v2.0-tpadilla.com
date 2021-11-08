import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import paperPlane from '../../../assets/icons/paperPlane.svg';
import './EmailForm.scss';

const EmailForm = () => {

/* Logic for Handling Form state & values: */
    const formRef = useRef();
    const [ emailSent, setEmailSent ] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        /* TODO: Review emailjs logic */

    }

    return (
        <div>
            <form ref={formRef} onSubmit={handleSubmit}>
                <input  type="text" placeholder="Name" name="user_name" />
                <input type="text" placeholder="Subject" name="user_subject" />
                <input type="text" placeholder="Email" name="user_email" />
                <textarea rows="5" placeholder="Message" name="message" /* style={ {backgroundColor: darkMode && "#333"}} *//>

                {/* TODO: Maybe put a mail icon? */}
                <button className="contact-button">
                    <img className="formBtn-img" src={paperPlane} alt=""/>Submit
                </button>
                {emailSent && "Thank you for sending a message!  I'll get back to you ASAP!"}
            </form>
        
        </div>
    );
};

export default EmailForm;