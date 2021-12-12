import React from 'react';
import { EmailForm, Footer, Hero } from '../../utils';
import './Contact.scss';

const Contact = () => {
    return (
        <>
            <main id="contact-container">
                <EmailForm />
                <Hero />
            </main>
            <Footer />
            
        </>
    );
};

export default Contact;