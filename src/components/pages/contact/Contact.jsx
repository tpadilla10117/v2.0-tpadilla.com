import React from 'react';
import { EmailForm, Footer, Hero } from '../../utils';
import './Contact.scss';

const Contact = () => {
    return (
        <div id='contact-container'>
            <main className="contact-wrapper">
                <EmailForm />
                <Hero />
            </main>
            <Footer />
        </div>
    );
};

export default Contact;