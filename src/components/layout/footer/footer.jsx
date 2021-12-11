import React from 'react';
import { FaTwitter, FaLinkedin, FaBehance, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.scss';

function  Footer() {
    return (
        <footer id="footer-container">
            <div className='footer-wrapper'>
                <div className='footerlinks-container'>
                    <div className='footerlinks-wrapper'>
                        <div className='footerlink-items'>
                            {/* <ul className='footerlink-title'>Home</ul> */}
                                <Link className='footerlink' to="/about">
                                    About
                                </Link>                            
                        </div>
                        <div className='footerlink-items'>
                            {/* <ul className='footerlink-title'>Home</ul> */}
                                <Link className='footerlink' to="/developer">
                                    Developer
                                </Link>                            
                        </div>
                        <div className='footerlink-items'>
                            {/* <ul className='footerlink-title'>Home</ul> */}
                                <Link className='footerlink' to="/ux">
                                    UX
                                </Link>                            
                        </div>
                        <div className='footerlink-items'>
                            {/* <ul className='footerlink-title'>Home</ul> */}
                                <Link className='footerlink' to="/contact">
                                    Contact
                                </Link>                            
                        </div>
                        <div className='footerlink-items'>
                            {/* <ul className='footerlink-title'>Home</ul> */}
                                <Link className='footerlink' to="/resume">
                                    Resume
                                </Link>                            
                        </div>

                    </div>

                </div>

                <section className='socialmedia'>
                    <div className='socialmedia-wrap'>
                        <Link className='sociallogo' to='/'>
                            Trin Padilla
                        </Link>
                        <small className='websiterights'>
                            Trin Padilla © {new Date().getFullYear() } All rights reserved.
                        </small>
                        <div className='socialicons'>
                            <a className='socialiconlink' href='/' target="blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </a>
                            <a className='socialiconlink' href='/' target="blank" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a className='socialiconlink' href='/' target="blank" aria-label="Github">
                                <FaGithub />
                            </a>
                            <a className='socialiconlink' href='/' target="blank" aria-label="Behance">
                                <FaBehance />
                            </a>

                        </div>

                    </div>

                </section>

            </div>
            
        </footer>
    );
};

export default Footer;
