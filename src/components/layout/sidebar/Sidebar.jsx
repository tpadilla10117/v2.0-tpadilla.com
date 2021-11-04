import React from "react";
import { Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import './Sidebar.scss';

/* This component renders a Sidebar / overlay when hamburger icon clicked (mobile view): */

    const Sidebar = (props) => {

        const { isOpen, navToggle } = props;

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






        return (
            <CSSTransition in={isOpen} timeout={300} unmountOnExit onEnter={ () => navToggle} onExited={ () => navToggle}>
                <div className="sidebar-container" isOpen={isOpen}>
                    <div className="sidebar-icon" onClick={navToggle}>

                    </div>
                    <div className="sidebar-wrapper">
                        <ul className="sidebar-menu">
                            <div className="sidebar-link" onClick={navToggle}>

                            {navOptions.map( (item, index) => {
                                return (
                                    <Link to={item.path} className="nav-item" style={ {textDecoration: "none"} } key={index}>
                                        <li key={index} className={item.title}>
                                            <span>{item.title}</span>
                                        </li>
                                    </Link>
                                )
                            })}

                            </div>
                        </ul>
                    </div>

                </div>

{/* TODO: This data goes in the overlay for the nav */}

           {/*  {navOptions.map( navItems => {
                return (
                    <ul id={navItems.id} className="navItems" key={navItems.id} >
                        <li>{navItems.title}</li>
                    </ul>
                )
            })} */}


            </CSSTransition>
        );
    };

    export default Sidebar;

    