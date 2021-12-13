import React, {useState, useEffect} from 'react';
import './Navbar.scss';

import NavIcon from '../../../assets/icons/navIcon.svg';
import googleMenu from '../../../assets/icons/googlemenu.svg';
import Placeholder from '../../../assets/icons/placeholder.png';
import { Link, NavLink } from 'react-router-dom';
import { NavbarData } from '../../../utils/seed';

const Navbar = (props) => {

   const { navToggle } = props;
   const [scrollNav, setScrollNav] = useState(false);
   /* const [ navLinkState, changeNavLinkState ] = useState(NavbarData);
   const [ isActive, setIsActive ] = useState(false); */


   const changeNav = () => {
       if (window.scrollY >= 80) {
           setScrollNav(true);
       } else {
           setScrollNav(false);
       }
   };

   useEffect(() => {
       window.addEventListener('scroll', changeNav)
   }, [] );

   /* background: ${ ( { scrollNav } ) => (scrollNav ? '#000' : 'transparent')}; */
/* TODO: This is going to be for when you click on the hamburger icon */
    return (
        <nav className="navbar" /* scrollNav={scrollNav}  */style={ {background: `${scrollNav ? '#101522' : 'transparent' }`}}>
            <div className="nav-items-container">

            {/* Logo: */}


            {NavbarData.map( (item, index) => {
                                return (
                                    <NavLink to={item.path} exact activeClassName="active" className='main-nav-item' style={ {textDecoration: "none"} } key={index}>
                                        <li key={index} className={item.title} id="navlinks">
                                            <span>{item.title}</span>
                                        </li>
                                    </NavLink>
                                )
                            })}
            </div>
            <div className="mobile-icon-container">
                <img className="mobile-icon" src={googleMenu} alt="" onClick={navToggle}/>
            </div>
            
            {/* <img className="nav-logo" src={Placeholder} alt="" /> */}
                        

        </nav>
    );
};

export default Navbar;