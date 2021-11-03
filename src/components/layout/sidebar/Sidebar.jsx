import React from "react";

/* This component renders a Sidebar / overlay when hamburger icon clicked (mobile view): */

    const Sidebar = (props) => {



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
            <div>


{/* TODO: This data goes in the overlay for the nav */}

           {/*  {navOptions.map( navItems => {
                return (
                    <ul id={navItems.id} className="navItems" key={navItems.id} >
                        <li>{navItems.title}</li>
                    </ul>
                )
            })} */}


            </div>
        );
    };

    export default Sidebar;

    