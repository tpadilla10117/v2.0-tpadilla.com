/* For default data to be used in project: */

import CrwnClothing from "../assets/images/crwn_clothing_landing.png";
import Codalorians from "../assets/images/codalorians.png";
import PixelDraw from "../assets/images/pixel_draw.png";
import Postbook from "../assets/images/postbook.png";
import RoboSearch from "../assets/images/robo_search.png";
import Turtle from "../assets/images/turtleBeach.jpg";
import AirBNB from "../assets/images/AirBNB.png";
import Amazon from "../assets/images/Amazon.png";
/* import LinkedIn from "../assets/images/LinkedIn.png"; */
import Form from "../assets/images/form.png";
import Netflix from "../assets/images/Netflix.png";
import hike from "../assets/images/hike.jpeg";
import aerial from '../assets/images/aerial.jpg';
import musicfest from '../assets/images/musicfest.jpg';
import spacestagram from '../assets/images/spacestagram.png';
import weather from '../assets/images/weather.jpg';
/* import turtle from "../assets/images/turtleBeach.jpg";
import fort1 from "../assets/images/FortBragg1.jpeg"; */
import keyboard from '../assets/images/keyboard.jpg';
/* import wireframes from '../assets/images/wireframes.jpg'; */
import ux from '../assets/images/ux.jpg';
import greeting from '../assets/images/greeting.jpg';
/* import resume from '../assets/images/resume.jpg'; */

export const NavbarData = [

  {
    title: 'Home',
    path: '/',
    /* icon: <AiIcons.AiFillHome />, */
    cName: 'nav-text',
    activeObject: null,
    id: 1,
    smooth: true,
    duration: 500,
    spy: true,
    exact: 'true',
    offset: -80,
},

{
    title: 'About',
    path: '/about',
    /* icon: <AiIcons.AiOutlineUser />, */
    cName: 'nav-text',
    activeObject: null,
    id: 2,
    img: `${hike}`,
    smooth: true,
    duration: 500,
    spy: true,
    exact: 'true',
    offset: -80
},

 {
    title: 'Developer',
    path: '/developer',
   /*  icon: <FaIcons.FaProjectDiagram />, */
    activeObject: null,
    cName: 'nav-text',
    id: 3,
    img: `${keyboard}`,
    smooth: true,
    duration: 500,
    spy: true,
    exact: 'true',
    offset: -80
},
{
    title: 'UX',
    path: '/ux',
    /* icon: <IoIcons.IoMdPhonePortrait />, */
    cName: 'nav-text',
    activeObject: null,
    id: 4,
    img: `${ux}`,
    smooth: true,
    duration: 500,
    spy: true,
    exact: 'true',
    offset: -80,
    dropdown: true,
},
{
    title: 'Contact',
    path: '/contact',
    /* icon: <AiIcons.AiOutlineFilePdf />, */
    cName: 'nav-text',
    activeObject: null,
    id: 5,
    img: `${greeting}`,
    smooth: true,
    duration: 500,
    spy: true,
    exact: 'true',
    offset: -80
},

/* {
  title: 'Resume',
  path: '/resume',
  cName: 'nav-text',
  activeObject: null,
  id: 6,
  img: `${resume}`,
  smooth: true,
    duration: 500,
    spy: true,
    exact: 'true',
    offset: -80
} */

]

export const LandingOptions = [

{
    title: 'About',
    path: '/about',
    /* icon: <AiIcons.AiOutlineUser />, */
    cName: 'nav-text',
    activeObject: null,
    id: 2,
    img: `${hike}`,
    alt: "Trin Padilla hiking on Fort Bragg"
},

 {
    title: 'Developer',
    path: '/developer',
   /*  icon: <FaIcons.FaProjectDiagram />, */
    activeObject: null,
    cName: 'nav-text',
    id: 3,
    img: `${keyboard}`,
    alt: "A black keyboard with highlighted white keys"
},
{
    title: 'UX',
    path: '/ux',
    /* icon: <IoIcons.IoMdPhonePortrait />, */
    cName: 'nav-text',
    activeObject: null,
    id: 4,
    img: `${ux}`,
    alt: "A person holding an iPhone with an image gallery on display"
},
{
    title: 'Contact',
    path: '/contact',
    /* icon: <AiIcons.AiOutlineFilePdf />, */
    cName: 'nav-text',
    activeObject: null,
    id: 5,
    img: `${greeting}`,
    alt: "Two people shaking hands"
},

/* {
  title: 'Resume',
  path: '/resume',
  cName: 'nav-text',
  activeObject: null,
  id: 6,
  img: `${resume}`
} */

]

export const caseStudies = [
  {
    id: 1,
    title: "TriTix",
    /* tech: "Next.js, Tailwind CSS, Firebase (Firestore), Stripe API, Fake Store API, Vercel, HTML, Redux, React.js, JS", */
    cardCoverText: "An app for connecting local artists to their communities",
    svgImg: `${musicfest}`,
    img: `${musicfest}`,
    alt: "Screenshot of a music festival",
    path: '/ux/tri-tix-app',
    /* description: "A responsive, full stack replica of Amazon deployed via Vercel. Users can log into an account, browse items, and initialize checkout with Stripe API integration.",
    techHighlights: [
      "Integrated Fake Store API for product queries and managed app state with Redux",
      "Integrated Stripe API with Firebase (Firestore, NoSQL DB) for user-checkout and data storage",
      "Developed responsive and optimized UI with Tailwind CSS",
      "Produced custom, re-usable functional components that can be used in future builds",
    ],
    links: [
      {text: "Demo", link: "https://trinp-amazon-clone.vercel.app/"},
      {text: "GitHub", link: "https://github.com/tpadilla10117/amazon-clone"}
    ] */
  }, 
  {
    id: 2,
    title: "Aerlial Turtles",
    /* tech: "Next.js, Tailwind CSS, Firebase (Firestore), Stripe API, Fake Store API, Vercel, HTML, Redux, React.js, JS", */
    cardCoverText: "A responsive portfolio for a professional Aerialist",
    svgImg: `${aerial}`,
    img: `${aerial}`,
    alt: "Screenshot of an aerialist performing",
    path: '/ux/aerial-turtles',
    /* description: "A responsive, full stack replica of Amazon deployed via Vercel. Users can log into an account, browse items, and initialize checkout with Stripe API integration.",
    techHighlights: [
      "Integrated Fake Store API for product queries and managed app state with Redux",
      "Integrated Stripe API with Firebase (Firestore, NoSQL DB) for user-checkout and data storage",
      "Developed responsive and optimized UI with Tailwind CSS",
      "Produced custom, re-usable functional components that can be used in future builds",
    ],
    links: [
      {text: "Demo", link: "https://trinp-amazon-clone.vercel.app/"},
      {text: "GitHub", link: "https://github.com/tpadilla10117/amazon-clone"}
    ] */
  }, 
]

export const projects = [
    {
      id: 1,
      title: "Amazon-Clone / Replica",
      tech: "Next.js, Tailwind CSS, Firebase (Firestore), Stripe API, Fake Store API, Vercel, HTML, Redux, React.js, JS",
      cardCoverText: "A full stack replica of the current Amazon build",
      svgImg: `${Amazon}`,
      img: `${Amazon}`,
      alt: "Screenshot of the Amazon, e-commerce replica",
      description: "A responsive, full stack replica of Amazon deployed via Vercel. Users can log into an account, browse items, and initialize checkout with Stripe API integration.",
      techHighlights: [
        "Integrated Fake Store API for product queries and managed app state with Redux",
        "Integrated Stripe API with Firebase (Firestore, NoSQL DB) for user-checkout and data storage",
        "Developed responsive and optimized UI with Tailwind CSS",
        "Produced custom, re-usable functional components that can be used in future builds",
      ],
      links: [
        {text: "Demo", link: "https://trinp-amazon-clone.vercel.app/"},
        {text: "GitHub", link: "https://github.com/tpadilla10117/amazon-clone"}
      ]
    }, 
    {
      id: 2,
      title: "Netflix-Clone / Replica",
      tech: "Next.js, Stripe API, Firebase(Firestore, NoSQL DB), Firebase(Cloud Hosting), CSS, HTML, React.js, Redux, JS",
      cardCoverText: "A partial replica of the current Netflix build",
      svgImg: `${Netflix}`,
      img: `${Netflix}`,
      alt: "Screenshot of the Netflix, e-commerce replica",
      description: "A responsive, full stack replica of the latest Netflix build deployed via Firebase Hosting.  Users can create / log into an account, subscribe to a service / mock a purchase using Stripe API, and browse a collection of films fetched from themoviedb.org.",
      techHighlights: [
        "Integrated Stripe API for successful test / mock transactions via Firebase extensions.  Users may use test-card #: 4242 4242 4242 4242 to mock a transaction",
        "Managed app state via Redux Global Store to compensate for scalability",
        "Designed a responsive, frontend UI with CSS",
      ],
      links: [
        {text: "Demo", link: "https://netflix-clone-897d7.web.app/"},
        {text: "GitHub", link: "https://github.com/tpadilla10117/netflix-clone"}
      ]
    }, 
    {
      id: 3,
      title: "Space-Stagram",
      tech: "Node.js, JS, React.js, HTML, SCSS",
      cardCoverText: "An image of a nebula fetched from the NASA APOD API",
      svgImg: `${spacestagram}`,
      img: `${spacestagram}`,
      alt: "A nebula from the NASA APOD API",
      description: "Spacestagram is an app that requests data from the NASA APOD API.  Users can query via the searchbar and ???like??? and ???unlike??? their favourite images.",
      techHighlights: [
        "Designed dynamic UI that requests data from NASA APOD API (https://github.com/nasa/apod-api)",
        "Implemented 'like' button feature that allows users to keep track of favorite images",
        "Utilized pagination for large user queries",
      ],
      links: [
        {text: "Demo", link: "https://spacestagram-ghc1owmja-tpadilla10117.vercel.app/"},
        {text: "GitHub", link: "https://github.com/tpadilla10117/spacestagram"}
      ]
    },  
    {
      id: 4,
      title: "Form Validator",
      tech: "Vanilla JS, HTML, CSS",
      cardCoverText: "A frontend web-application featuring form validation & page redirect",
      svgImg: `${Form}`,
      img: `${Form}`,
      alt: "A form with empty values",
      description: "A frontend web-application based on a desktop mockup in Figma.  Written in Vanilla JS featuring form validation & page redirect",
      techHighlights: [
        "Created frontend UI to match mockup specifications",
        "Implemented conditional logic for page redirect based on user input",
      ],
      links: [
        {text: "Demo", link: "https://eloquent-platypus-684d7f.netlify.app"},
        {text: "GitHub", link: "https://github.com/tpadilla10117/FormValidator"}
      ]
    }, 
    {
      id: 5,
      title: "weather-react",
      tech: "Node.js, JS, React.js, HTML, CSS",
      cardCoverText: "An app for querying the current weather around the world",
      svgImg: `${weather}`,
      img: `${weather}`,
      alt: "Screenshot of sunlight gleaming through clouds",
      description: "weather-react is a simple weather-tracking web-application in which users can query/search for the weather conditions in a given location around the world.",
      techHighlights: [
        "Created a dynamic UI to request data from OpenWeather API {https://openweathermap.org/api} ",
        "Implemented a resuable searchbar component for user queries",
        "Designed a responsive, frontend UI with CSS",
      ],
      links: [
        {text: "Demo", link: "https://affectionate-bell-bcf7a5.netlify.app/"},
        {text: "GitHub", link: "https://github.com/tpadilla10117/weather-react"}
      ]
    }, 
    {
      id: 6,
      title: "Airbnb-Clone / Replica",
      tech: "Next.js, Tailwind CSS, Mapbox GL, Geolib, HTML, Vercel, React.js, JS",
      cardCoverText: "A replica of the current Airbnb build",
      svgImg: `${AirBNB}`,
      img: `${AirBNB}`,
      alt: "Screenshot of the Airbnb Replica landing page",
      description: "A replica of the recently deployed Airbnb dashboard and query page, complete with a calendar for user-scheduling and an interactable map via Mapbox GL.",
      techHighlights: [
        "Utilized server-side rendering with Next.js to optimize load-times and overall UX",
        "Designed a responsive, frontend UI with Tailwind CSS",
        "Produced custom, re-usable functional components that can be used in future builds",
      ],
      links: [
        {text: "Demo", link: "https://airbnb-clone-tpadilla-edrpd04h9-tpadilla10117.vercel.app/"},
        {text: "GitHub", link: "https://github.com/tpadilla10117/airbnb-clone"}
      ]
    }, 
/* TODO: Need to update with latest build */
    {
      id: 7,
      title: "Crwn Clothing",
      tech: "Sass, CSS, Firebase, HTML, React.js, JS",
      cardCoverText: "An e-commerce for Stylish, Trendy Clothing",
      svgImg: `${CrwnClothing}`,
      img: `${CrwnClothing}`,
      alt: "Screenshot of the e-commerce app for Stylish, Trendy Clothing.",
      description: "A full stack, e-commerce web-application in-progress that will guide users through a simple, easy-to-follow shopping experience for hip/trendy apparel. Users can currently browse a catalog of products, create an account, and sign-out of the application.",
      techHighlights: [
        "Utilized Google Firebase for user authentication",
        "Managed user data with queries to Firestore (NoSQL DB)",
        "Designed frontend UI with Sass and custom CSS",
      ],
      links: [
        {text: "In Development", link: "https://peaceful-edison-ca2461.netlify.app/"},
        {text: "GitHub", link: "https://github.com/tpadilla10117/crwn-clothing"}
      ]
    },
    /* {
      id: 8,
      title: "LinkedIn-Clone",
      tech: "Firebase (Firestore, NoSQL DB), React.js, Redux, JS, Material UI",
      cardCoverText: "A static replica of the LinkedIn Dashboard",
      svgImg: `${LinkedIn}`,
      img: `${LinkedIn}`,
      alt: "Screenshot of the LinkedIn-Replica Dashboard.",
      description: "A full stack, static web-application in which user's can create an account and make posts on an interactable dashbaord",
      techHighlights: [
        "Utilized Google Firebase for user authentication",
        "Managed user data with queries to Firestore",
        "Designed frontend UI with Material UI and CSS",
      ],
      links: [
        {text: "In Development", link: "https://peaceful-edison-ca2461.netlify.app/"},
        {text: "GitHub", link: "https://github.com/tpadilla10117/linkedin-clone"}
      ]
    }, */

    {
      id: 8,
      title: "Codalorians",
      tech: "Express.js, JS, HTML, React.js, PostgreSQL, CSS, Node.js, Axios, Stripe, Bootstrap, Heroku, bcrypt",
      cardCoverText: "An e-commerce for Musical Instruments",
      svgImg: `${Codalorians}`,
      img: `${Codalorians}`,
      alt: "",
      description: "A full stack, e-commerce web-application that guides users through an intuitive shopping experience. Users can browse a catalog of items, add/remove items from their cart, make purchases, & create product reviews.",
      techHighlights: [
        "Created API and database with Express.js, Node.js, and PostgreSQL to store and retrieve products",
        "Managed user authentication through bcrypt",
        "Designed frontend UI with Bootstrap CSS and custom CSS frameworks",
        "Developed templates for common elements such as forms to reduce redundancies"
      ],
      links: [
        {text: "Demo", link: "https://afternoon-brook-26059.herokuapp.com/home"},
        {text: "GitHub", link: "https://github.com/2006-cpu/codalorians"}
      ]
    },
    {
      id: 9,
      title: "Pixel Draw",
      tech: "JS, React.js, CSS, Node.js, HTML",
      cardCoverText: "A Simple, Grid-Based, Pixel-Art Creator",
      svgImg: `${PixelDraw}`,
      img: `${PixelDraw}`,
      alt: "An image of an empty grid of blocks surrounded by a colored grid-palette",
      description: "A simple drawing web-application where users can choose from a palette of defined colors and create pixelated art.",
      techHighlights: [
        "Designed frontend UI within React.js library using custom CSS frameworks",
        "Developed custom, interactive buttons using logic based in JS",
      ],
      links: [
        {text: "Demo", link: "https://objective-volhard-a4bd7a.netlify.app/"},
        {text: "GitHub", link: "https://github.com/tpadilla10117/pixel_draw/tree/master/my-app"}
      ]
    }, 
    {
      id: 10,
      title: "Post Book",
      tech: "JS, Node.js, Express.js, jQuery, HTML, CSS, Bootstrap",
      cardCoverText: "An App Where Users Can Post Items For Sale",
      svgImg: `${Postbook}`,
      img: `${Postbook}`,
      alt: "A clickable card of an application called `PostBook`",
      description: "A 'Craigslist'-like clone that allows users to post objects for sale.  Users can interact with each other via message and coordinate purchases.",
      techHighlights: [
        "Created a UI with Express.js API and structured the app as a single-page application",
        "Implemented jQuery JS library to handle click events, state management, etc. ",
        "Designed UX with Bootstrap CSS framework"
      ],
      links: [
        {text: "Demo", link: "https://laughing-austin-fe12b7.netlify.app/#"},
        {text: "GitHub", link: "https://github.com/tpadilla10117/strangersThings-PostBook-"}
      ]
    },
    /* TODO: Need to update with latest deploy: */
    {
      id: 11,
      title: "Postboard.com",
      tech: "JS, Node.js, Express.js, PostgreSQL, Jest, CSS, HTML, SASS, jsonwebtoken, Axios",
      cardCoverText: "A custom backend for a Tumblr clone",
      svgImg: ``,
      img: `${Turtle}`,
      alt: "An image of post data in JSON format",
      description: "A custom-built API and database intended to serve as the backend for a ???Tumblr??? clone. Users can create an account as well as view, create, delete, and edit posts with content.",
      techHighlights: [
        "Developed backend logic containing login, logout, register, and routing functionality within a scalable, custom API",
        "Automated unit tests in Jest to test JS, PostgreSQL, and API scripts",
        "Implemented user authentication through bcrypt",
        "Developed user post & tag content generation through CRUD methodology"
      ],
      links: [
        {text: "In Development", link: "https://murmuring-garden-99126.herokuapp.com/api/posts"},
        {text: "GitHub", link: "https://github.com/tpadilla10117/post-integration"}
      ]
    },
    {
      id: 12,
      title: "Robo Search",
      tech: "JS, React.js, HTML, CSS",
      cardCoverText: "An image filter",
      svgImg: `${RoboSearch}`,
      img: `${RoboSearch}`,
      alt: "A clickable card of an application called `Robo Search`",
      description: "A simple application and UI that allows users to browse and filter through images of Robots",
      techHighlights: [
        "Designed UI and UX with custom CSS",
        "Implemented basic filter logic allowing users to search cards"
      ],
      links: [
        {text: "Demo", link: "https://tpadilla10117.github.io/robo_search/"},
        {text: "GitHub", link: "https://github.com/tpadilla10117/robo_search"}
      ]
    },
    
  ]

/* Data for carousel in AboutMe.jsx: */
/* Known also as 'slides' in Carousel.jsx */
  export const carouselData = [
    {
        image: 'https://images.unsplash.com/photo-1620165366489-d08eff58ccf5?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        image: 'https://images.unsplash.com/photo-1636888302671-de09823cddac?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        image: 'https://images.unsplash.com/photo-1636844799799-fb41e4dc62ee?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ]

  export const carouselIndicatorData = [
      {
          id: 0
      },
      {
          id: 1
      },
      {
          id: 2
      }
  ];