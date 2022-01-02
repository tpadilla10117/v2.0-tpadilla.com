<!-- General Notes on Project: -->
<!-- TODO: mobile views practically done expect AboutMe -->
General:
    - Style inconsistencies.  Some pure SASS, but some usage of classnames & style tags (primarily in Devloper.jsx)
    - Typography: Original surfer, Lora
    - Colors: Need contrast of 4.5: 1 (minimum), 16:1 (high contrast)
    - Colors: 60:30:10 rule & 15:1 contrast ratio
    - Colors: secondary: #386FA4 (Honolulu blue); 
        main / dominant section: #24496A( Indigo Dye);
        secondary bg: #f0e9dc (alabaster); 
        section-text: #716252 (Raw Umber)
        call to action: 
    //TODO: <!-- Place colors in the global scope -->

    - Buttons: 
        Btn-Bg: #60D2B6 (Turquoise); 
        Btn-Txt: #FFF (White); 
        Btn-Hover-State: #36BF9D (Mountain Meadow);

Landing.jsx:
    - <!-- TODO: Double check the responsive design -->
    - Think about borders inbetween columns

Navbar.jsx:
    - <!-- TODO:  --> Something going on with memory leak when resizing nav

    Bonus:
    - Animations on the modal icon

Sidebar.jsx:
    - <!-- TODO: --> Color, fonts, social icons on the bottom
    - side view needs adjustment

AboutMe.jsx:
    <!-- TODO: -->
    - Responsive design
    - Containers need to be adjusted
    - icons need to scale more fluidly and exit out of animation fluidly
    - Decide what to do with carousel component - add overlays? Card flips?

Developer.jsx: <!-- TODO: -->
    <!-- TODO: Responsiveness for the entire container.  I set max height on the cards, but for specific breakpoints, need to adjust -->
    - **Styles for individual components in this files are in their respective component files.
    - consider borders for scaling beyond mobile view
    - adjust color palettes and font
    - Double-check modal view
     - Animations on the modal close icon
     //TODO: Images on the cards need to be better quality

    Bonus:
    - Animations on the modal icon

UX.jsx: <!-- TODO: -->

<!-- TODO: Responsiveness for the entire container.  I set max height on the cards, but for specific breakpoints, need to adjust -->

    - Create a dynamic component for the general layout of the case study, being able to pass in children to populate with content
    (Use the same methods that you did with the Developer section)





Contact.jsx: <!-- TODO: -->

    - adjust the email component accordingly


<!-- TODO: -->
- Bugg between 820 px resize and 1000px
- Change Icons to HeroIcons
- Progress Bar
- React transition-group and CSS transtions are acting weird [http://reactcommunity.org/react-transition-group/css-transition]
- Add a script that loads your site with an animation
- Add skeleton loading screens
- Add transitions when navigating to other routes
- Add content to the footer.jsx component
