import React, { useState } from 'react';

import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { Developer, AboutMe, Landing, Ux, Contact, Resume} from './utils';
import './App.css';

function App() {


/* State for Modals: */
  const [modalVisibility, setModalVisibility] = useState(false);

  const [activeProject, setActiveProject] = useState(null);



  return (
    <div>
      <div className="route-container">


        {/* TODO: Landing Section */}
        <Route exact path='/'>
            <Landing />
          </Route>

          {/* TODO: About Section */}
          <Route exact path='/about'>
            <AboutMe />
          </Route>

        {/* TODO: Developer Section - styling */}
          <Route exact path="/developer">
          
            <Developer 
              modalVisibility={modalVisibility}
              setModalVisibility={setModalVisibility}
              activeProject={activeProject}
              setActiveProject={setActiveProject}
            />

          </Route>


        {/* TODO: UX Design Section */}
          <Route exact path='/ux'>
            <Ux />
          </Route>

        {/* TODO: Contact Section */}
          <Route exact path='/contact'>
            <Contact />
          </Route>


        {/* TODO: Resume Section */}
         <Route exact path='/resume'>
            <Resume />
          </Route>

      </div>



    </div>
  );
}

export default App;
