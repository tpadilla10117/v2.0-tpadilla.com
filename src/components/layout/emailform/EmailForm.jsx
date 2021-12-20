import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import {Link} from 'react-router-dom';
import paperPlane from '../../../assets/icons/paperPlane.svg';
import './EmailForm.scss';
import keyboard from '../../../assets/images/keyboard.jpg';
import cabana from '../../../assets/images/cabana.jpg';

const EmailForm = () => {

/* Logic for Handling Form state & values: */
    const formRef = useRef();
    const [ emailSent, setEmailSent ] = useState(false);
    const [ buttonText, setButtonText ] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();

    /* emailjs logic: */
        emailjs.sendForm('service_2r2pxvp', 'template_1u4c6dc', formRef.current, 'user_ssQeZXemBZwlrNSJZ8wgx')
      .then((result) => {
          console.log(result.text);
          setEmailSent(true);
      }, (error) => {
          console.log(error.text);
      });

      setButtonText("Thank you for sending a message!  I'll get back to you ASAP!");

    }

    return (
        <section className='emailform-container'>
            <img className='bg-img' src={cabana} alt=""></img>
            <div className='content'>

            <form ref={formRef} onSubmit={handleSubmit}>
                <div className='forminput-wrapper'>

                    <input type="text" placeholder="Name" name="user_name" required />
                    <input type="text" placeholder="Subject" name="user_subject" required />
                    <input type="text" placeholder="Email" name="user_email" required />
                    <textarea rows="5" placeholder="Message" name="message" required />
                </div>
                {/* TODO: Need to make icon consistent with icon library: */}
            {!emailSent ? 
                <button className="contact-button">
                    <img className="formBtn-img" src={paperPlane} alt=""/>Submit
                </button> 
                
                : 
                
                <p className='contact-txt-fade'>{emailSent && buttonText}</p>
                
            }    
            </form>
            <p className='formtxt'>Want to see my Resume ? <a href="#">Download Resume</a></p>
            <Link className='sociallogo' to='/'>
                Trin Padilla
            </Link>
            {/* <img src="" width='100' align="center"></img> */}

            {/* src={landingImage.img} */}
            </div>
        </section>
    );
};

export default EmailForm;