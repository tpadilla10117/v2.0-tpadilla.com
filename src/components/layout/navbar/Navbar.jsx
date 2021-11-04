import React, {useState, useEffect} from 'react';
import './Navbar.scss';

import NavIcon from '../../../assets/icons/navIcon.svg';
import Placeholder from '../../../assets/icons/placeholder.png';

import { NavbarData } from '../../../utils/seed';

const Navbar = (props) => {

   const { navToggle } = props;
   const [scrollNav, setScrollNav] = useState(false);
   const [ navLinkState, changeNavLinkState ] = useState(NavbarData);

/* TODO: This is going to be for when you click on the hamburger icon */
    return (
        <nav className="navbar">

            {/* Logo: */}



            <img className="mobile-icon" src={NavIcon} alt="" onClick={navToggle}/>
            
            {/* <img className="nav-logo" src={Placeholder} alt="" /> */}


        </nav>
    );
};

export default Navbar;