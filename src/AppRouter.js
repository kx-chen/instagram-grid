import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './assets/App.css';
import ImageContainer from './components/ImageContainer.js';
import TopBar from './components/TopBar.js';


class AppRouter extends Component {
  render() {
      window.hsp.init({
          "useTheme": false
      });

      window.hsp.getAuth((data) => {
         console.log(data);
      });

    return (
    <Router>
        <TopBar/>
        <Link to="/" className="App-link">Home</Link>
      
        <Route path="/" exact render={() => <ImageContainer/>}/>
    </Router>
    );
  }
}

export default AppRouter;
