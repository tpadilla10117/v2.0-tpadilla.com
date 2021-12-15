import React, { useState } from 'react';
import { Navbar, Sidebar, HorizontalNav } from '../../utils';
import "./Header.scss";

/* Header Component is to contain the navigation components: */

    const Header = (props) => {

        const [isOpen, setIsOpen] = useState(false);

        const navToggle = () => {
            setIsOpen(!isOpen);
        };


        return (
            <header className="header-wrapper">
                   
                    <Navbar isOpen={isOpen} navToggle={navToggle} />
                    <HorizontalNav isOpen={isOpen} navToggle={navToggle} />
                    <Sidebar isOpen={isOpen} navToggle={navToggle} />

            </header>
        );
    };

    export default Header;