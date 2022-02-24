import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import './index.css';
import App from './components/App';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <ScrollToTop/>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
