# App Description

- The second version of my personal portfolio built from the ground-up as a Single Page Application (SPA) with React.js, SCSS / SASS, JS, & HTML.  End users can navigate a user-flow that teaches them about both myself and the work I do.  

## Deployment:

- (https://tpadilla.com)

## Tech Stack:

- Node.js, JS, React.js, HTML, CSS, SASS, FaIcons, HeroIcons

## File Structure:

<!-- tree generated by markdown-notes-tree starts here -->

- [**build**](build)
    - [**static**](build/static)
        - [**css**](build/static/css)
        - [**js**](build/static/js)
        - [**media**](build/static/media)
- [**public**](public)
- [**src**](src)
    - [**assets**](src/assets)
        - [**favicons**](src/assets/favicons)
        - [**icons**](src/assets/icons)
        - [**images**](src/assets/images)
        - [**resume**](src/assets/resume)
        - [**videos**](src/assets/videos)
    - [**components**](src/components)
        - [**layout**](src/components/layout)
            - [**aboutHeroSection**](src/components/layout/aboutHeroSection)
            - [**BlueBgSection**](src/components/layout/BlueBgSection)
            - [**bulletlist**](src/components/layout/bulletlist)
            - [**cardwrapper**](src/components/layout/cardwrapper)
            - [**carousel**](src/components/layout/carousel)
            - [**emailform**](src/components/layout/emailform)
            - [**footer**](src/components/layout/footer)
            - [**header**](src/components/layout/header)
            - [**herosection**](src/components/layout/herosection)
            - [**horizontalNav**](src/components/layout/horizontalNav)
            - [**linkblock**](src/components/layout/linkblock)
            - [**linkbutton**](src/components/layout/linkbutton)
            - [**modal**](src/components/layout/modal)
            - [**navbar**](src/components/layout/navbar)
            - [**personalcards**](src/components/layout/personalcards)
            - [**projectcard**](src/components/layout/projectcard)
            - [**projectpage**](src/components/layout/projectpage)
            - [**sectionwrapper**](src/components/layout/sectionwrapper)
            - [**sidebar**](src/components/layout/sidebar)
            - [**uxHeroSection**](src/components/layout/uxHeroSection)
            - [**videosection**](src/components/layout/videosection)
        - [**pages**](src/components/pages)
            - [**about**](src/components/pages/about)
            - [**contact**](src/components/pages/contact)
            - [**developer**](src/components/pages/developer)
            - [**landing**](src/components/pages/landing)
            - [**resume**](src/components/pages/resume)
            - [**ux**](src/components/pages/ux)
                - [**casestudies**](src/components/pages/ux/casestudies)
                    - [**aerial-turtles**](src/components/pages/ux/casestudies/aerial-turtles)
                    - [**tri-tix-app**](src/components/pages/ux/casestudies/tri-tix-app)
    - [**utils**](src/utils)

<!-- tree generated by markdown-notes-tree ends here -->


## Limitations & Future Iterations:

- As of 11/12/21 - Integrate a shopping cart for an e-commerce experience
- Consider creating additional routes
- Consider integrating a blog / feed

## Integrations, Tools, & Libraries:

### `npm install dotenv`

- Installed dotenv for load env. variables from .env into process.env

### `npm install react-router-dom`

### `npm install react-transition-group`

- Exposes simple components useful for defining entering and exiting transitions. React Transition Group is not an animation library like React-Motion, it does not animate styles by itself. Instead it exposes transition stages, manages classes and group elements and manipulates the DOM in useful ways, making the implementation of actual visual transitions much easier.

### `npm install sass`

- Sass is a stylesheet language / CSS preprocessor that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.
(https://sass-lang.com/documentation)

### `npm install classnames`

- A simple JavaScript utility for conditionally joining classNames together.
(https://www.npmjs.com/package/classnames)

### `npm i react-icons`

- Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.

### `npm i emailjs.com`

- Email.js (email server provider library) (https://www.emailjs.com/docs/)
- Notes from FAQS: "A better way to think of EmailJS in terms of security is not as a service that allows you to send email from Javascript, but rather as a service that allows you to create a predefined set of emails via the dashboard, and then just trigger the emails from the Javascript. This is quite similar to how emails are usually sent via a proprietary server code, and also to the way products like Intercom or customer.io are working.

Additionally, we've also developed various tools to prevent abuse – for instance, we have IP based rate limits to prevent bots from spamming, the whitelist of origin, and also support reCAPTCHA tests to make sure that a human is sending the email (although it's up to the developer to turn this feature on)."

### `npm i styled-components`

(https://styled-components.com/docs/basics#getting-started)
- Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!

### `npm i react-scroll`

- React component for animating vertical scrolling
- (https://www.npmjs.com/package/react-scroll)

### `npm install -D markdown-notes-tree`
(https://github.com/mistermicheels/markdown-notes-tree)
- If you have a folder structure with Markdown notes, you can use this tool to generate Markdown trees that act as a table of contents for the folder structure.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)