import React, {useState, useEffect} from 'react';
import './HorizontalNav.scss';
import googleMenu from '../../../assets/icons/googlemenu.svg';
import { Link, NavLink } from 'react-router-dom';
import { NavbarData } from '../../../utils/seed';

const HorizontalNav = (props) => {

   const { navToggle } = props;
   const [scrollNav, setScrollNav] = useState(false);
   /* const [ navLinkState, changeNavLinkState ] = useState(NavbarData);
   const [ isActive, setIsActive ] = useState(false); */
/* 
   const navVariable = document.getElementsByClassName('navbar');
   console.log("Here is nav: ", typeof navVariable); */


   const changeNav = () => {
       if (window.scrollY >= 80) {
           setScrollNav(true);
       } else {
           setScrollNav(false);
           /* navVariable.style.backgroundColor = '#101522'; */
       }
   };

   useEffect(() => {
       window.addEventListener('scroll', changeNav)
   }, [] );

   /* TODO: the transition on the navbar breaks the color in the navbar when its vertical! */
   /* background: ${ ( { scrollNav } ) => (scrollNav ? '#000' : 'transparent')}; */

/* TODO: This will be my component for the horizontal nav*/
    return (
        <nav className="horizontal-navbar" /* scrollNav={scrollNav}  */ style={ {background: `${scrollNav ? '#101522' : 'transparent' }` } }>
            <div className="hnav-items-container">

            {NavbarData.map( (item, index) => {
                                return (
                                    <NavLink to={item.path} exact activeClassName="active" className='hnav-main-nav-item' style={ {textDecoration: "none"} } key={index}>
                                        <li key={index} className={item.title} id="hnav-navlinks">
                                            <span>{item.title}</span>
                                        </li>
                                    </NavLink>
                                )
                            })}
            </div>
            <div className="hnav-mobile-icon-container">
                <img className="hnav-mobile-icon" src={googleMenu} alt="" onClick={navToggle}/>
            </div>
                        

        </nav>
    );
};

export default HorizontalNav;