import React from 'react';
import './Navbar.scss';

import NavIcon from '../../../assets/icons/navIcon.svg';
import Placeholder from '../../../assets/icons/placeholder.png';

const Navbar = () => {

    const navOptions = [
        {
          id: 1,
          title: "About",
        },
        {
            id: 2,
            title: "Developer",
        },
        {
            id: 3,
            title: "UX Designer",
        },
        {
            id: 4,
            title: "Contact",
        },
        {
            id: 5,
            title: "Resume",
        }
      ];

/* TODO: This is going to be for when you click on the hamburger icon */
    return (
        <nav className="navbar">

            {/* Logo: */}


        {/* TODO: This data goes in the overlay for the nav */}

           {/*  {navOptions.map( navItems => {
                return (
                    <ul id={navItems.id} className="navItems" key={navItems.id} >
                        <li>{navItems.title}</li>
                    </ul>
                )
            })} */}

            <img className="mobile-icon" src={NavIcon} alt="" />
            {/* <img className="nav-logo" src={Placeholder} alt="" /> */}


        </nav>
    );
};

export default Navbar;