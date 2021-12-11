import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.scss';

function  Footer() {
    return (
        <footer id="footer-container">
            <div className='footer-wrapper'>
                <div className='footerlinks-container'>
                    <div className='footerlinks-wrapper'>
                        <div className='footerlink-items'>
                            <ul className='footerlink-title'>
                                <Link className='footerlink' to="/">
                                    Home
                                </Link>
                            </ul>

                        </div>

                    </div>

                </div>

                <section className='socialmedia'>
                    <div className='socialmedia-wrap'>
                        <Link className='sociallogo'>

                        </Link>
                        <small className='websiterights'>

                        </small>
                        <div className='socialicons'>
                            <a className='socialiconlink' href='/' target="blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </a>

                        </div>

                    </div>

                </section>

            </div>
            
        </footer>
    );
};

export default Footer;
