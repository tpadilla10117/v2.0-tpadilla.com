import React from 'react';

import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { Landing, AboutMe} from './utils';
import './App.css';

function App() {
  return (
    <div>
      <div className="route-container">

        {/* TODO: Landing Section */}
          <Route exact path="/">
          
            <Landing />

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
