<!-- General Notes on Project: -->
<!-- TODO: mobile views practically done expect AboutMe -->
<!-- Macbook: 1280x800
Apple	iMac 21.5-inch	55 (21.5)	1920 x 1080
Apple	iMac 27-inch	69 (27)	2560 x 1440 -->


Library / Dependency Notes:

    - CSS preprocessors: A scripting language that extends CSS by allowing developers to write code in one language and then compile it into CSS.

    - Compilers: converts programmer's procedural language program (source code) into the machine language code (object code).  This object code can be then saved and run later.
    
    - Interpreter: Converts the procedural language one statement at a time into machine code just before it is executed.  No object code is saved. e.g. standard version of BASIC

    - SASS ('Syntactically Awesome Style Sheets'): an extension of CSS that enables you to use things like variables, nested rules, inline imports and more. It also helps to keep things organised and allows you to create style sheets faster. (Additional explanations at: https://www.creativebloq.com/web-design/what-is-sass-111517618 or see documentation at https://sass-lang.com/documentation)

Other Tech Notes:

    - Open Graph meta tags: Open Graph meta tags are snippets of code that control how URLs are displayed when shared on social media. They’re part of Facebook’s Open Graph protocol and are also used by other social media sites, including LinkedIn and Twitter (if Twitter Cards are absent). You can find them in the <head> section of a webpage. Any tags with og: before a property name are Open Graph tags.

        - Resources:
            - (https://ahrefs.com/blog/open-graph-meta-tags/)
            - (https://developers.facebook.com/docs/sharing/webmasters/) - Official Documentation
            - (https://ogp.me/) - Documentation
            - (https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup) - Twitter Documentation
        
        - Validators:
            - Twitter: (https://cards-dev.twitter.com/validator)
            - Facebook: (https://developers.facebook.com/tools/debug/)
            - Linkedin: (https://www.linkedin.com/post-inspector/inspect/)

    - manifest.json:
        - The manifest.json is a simple JSON file in your website that tells the browser about your website on user's mobile device or desktop. Having a manifest is required by Chrome to show the Add to Home Screen prompt.  When user installs or bookmark your web application to the homescreen or adds it to an application launcher, manifest.json provides to the browser so that it can treat your website the name, icons, etc.

        - (https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)

        - (https://hackthestuff.com/article/what-is-manifest-json-file-and-how-it-is-useful#:~:text=The%20manifest.,Add%20to%20Home%20Screen%20prompt.&text=json%20provides%20to%20the%20browser,the%20name%2C%20icons%2C%20etc.)


<!-- TODO: DEPLOY BUGS!!!: -->
    - Responvise design needs a revisit for some tablets

    <!-- TODO: Meta data -->

    Landing.jsx:
        - Routing not working from Landing.jsx -> the image clicks fail

    

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
    <!-- TODO: Mobile largely done, need to adjust for bigger screens, esp iMacs -->

    - Buttons: 
        Btn-Bg: #60D2B6 (Turquoise); 
        Btn-Txt: #FFF (White); 
        Btn-Hover-State: #36BF9D (Mountain Meadow);

    - Paragraph (Sections / Asides) :
        font-size: 16px;

    -h2 :
        font-size: 24px;

    -h3: 
        font-size: 20px;

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
