import React, { useState, useRef } from 'react';

import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { Developer, AboutMe, Landing, Ux, Contact, Resume, Header, CaseStudies} from './utils';
import './App.css';

function App() {


/* State for Modals: */
  const [modalVisibility, setModalVisibility] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

/* State for Case Study routing: */

  const nodeRef = React.useRef(null);

  return (
    
    <div className="app-container">


      <CSSTransition 
      timeout={300}>
        <Header/>
      </CSSTransition>


      <div className="route-container">

        {/* TODO: Landing Section */}
          <Route exact path='/'>{ ({ match }) => (
            <CSSTransition
            nodeRef={nodeRef}
            in={match != null}
            timeout={300}
            classNames="fade"
            unmountOnExit>
              <div className='fade' ref={nodeRef}>
                <Landing />
              </div>
            </CSSTransition>
          )} 
          </Route>

        {/* TODO: About Section */}
          <Route exact path='/about'>{ ({ match }) => (
            <CSSTransition
            nodeRef={nodeRef}
            in={match != null}
            timeout={300}
            classNames="fade"
            unmountOnExit>
              <div className='fade' ref={nodeRef}>
                <AboutMe />
              </div>
            </CSSTransition>
          )} 
          </Route>

        {/* TODO: Developer Section */}
          <Route exact path='/developer'>{ ({ match }) => (
            <CSSTransition
            nodeRef={nodeRef}
            in={match != null}
            timeout={300}
            classNames="fade"
            unmountOnExit>
              <div className='fade' ref={nodeRef}>
                <Developer 
                 modalVisibility={modalVisibility}
                 setModalVisibility={setModalVisibility}
                 activeProject={activeProject}
                 setActiveProject={setActiveProject}
                />
              </div>
            </CSSTransition>
          )} 
          </Route>


        {/* TODO: UX Design Section */}
           <Route exact path='/ux'>{ ({ match }) => (
            <CSSTransition
            nodeRef={nodeRef}
            in={match != null}
            timeout={300}
            classNames="fade"
            unmountOnExit>
              <div className='fade' ref={nodeRef}>
                <Ux />
              </div>
            </CSSTransition>
          )} 
          </Route>

          {/* TODO: Contact Section */}

           <Route exact path='/contact'>{ ({ match }) => (
            <CSSTransition
            nodeRef={nodeRef}
            in={match != null}
            timeout={300}
            classNames="fade"
            unmountOnExit>
              <div className='fade' ref={nodeRef}>
                <Contact />
              </div>
            </CSSTransition>
          )} 
          </Route>

          {/* TODO: Resume Section */}

           <Route exact path='/resume'>{ ({ match }) => (
            <CSSTransition
            nodeRef={nodeRef}
            in={match != null}
            timeout={300}
            classNames="fade"
            unmountOnExit>
              <div className='fade' ref={nodeRef}>
                <Resume />
              </div>
            </CSSTransition>
          )} 
          </Route>

          {/* TODO: UX Design Sections: */}
          <Route exact path='/ux/tri-tix-app'>{ ({ match }) => (
            <CSSTransition
            nodeRef={nodeRef}
            in={match != null}
            timeout={300}
            classNames="fade"
            unmountOnExit>
              <div className='fade' ref={nodeRef}>
                <CaseStudies />
              </div>
            </CSSTransition>
          )} 
          </Route>

      </div>



    </div>
  );
}

export default App;
