import React, { useState } from 'react';

import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { Landing, AboutMe} from './utils';
import './App.css';

function App() {


/* State for Modals: */
  const [modalVisibility, setModalVisibility] = useState(false);

  const [activeProject, setActiveProject] = useState(null);



  return (
    <div>
      <div className="route-container">

        {/* TODO: Landing Section */}
          <Route exact path="/">
          
            <Landing 
              modalVisibility={modalVisibility}
              setModalVisibility={setModalVisibility}
              activeProject={activeProject}
              setActiveProject={setActiveProject}
            />

          </Route>

        {/* TODO: About Section */}
          <Route exact path='/about'>
            <AboutMe />
          </Route>

        {/* TODO: Developer Section */}


        {/* TODO: UX Design Section */}


        {/* TODO: Contact Section */}


        {/* TODO: Resume Section */}

      </div>



    </div>
  );
}

export default App;
