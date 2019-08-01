import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './assets/App.css';
import App from './components/App.js';
import ImageContainer from './components/ImageContainer.js';
import TopBar from './components/TopBar.js';


class AppRouter extends Component {
  render() {
    return (
    <Router>
        <TopBar/>
        <Link to="/" className="App-link">Home</Link>
      
        <Route path="/" exact render={() => <ImageContainer/>}></Route>
    </Router>
    );
  }
}

export default AppRouter;
