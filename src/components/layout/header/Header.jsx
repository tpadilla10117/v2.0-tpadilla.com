import React, { useState } from 'react';
import { Navbar, Sidebar } from '../../utils';

/* Header Component is to contain the navigation components: */

    const Header = (props) => {

        const [isOpen, setIsOpen] = useState(false);

        const navToggle = () => {
            setIsOpen(!isOpen);
        };


        return (
            <div id="header-wrapper">
                <header className="header">
                   {/* TODO: Nav component: */}
                    <Navbar />
                   {/* TODO: Sidebar component: */}
                    <Sidebar />

                </header>
            </div>
        );
    };

    export default Header;