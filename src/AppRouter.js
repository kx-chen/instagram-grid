import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './assets/App.css';
import Bolly  from './Bolly.js';
import App from './components/App.js';
import ImageContainer from './components/ImageContainer.js';

class AppRouter extends Component {
  render() {
    return (
    <Router>
        <div className="App-header">
           <Link to="/" className="App-link">Home</Link>
        </div>

        <Route path="/" exact render={() => <ImageContainer/>}></Route>
    </Router>
    );
  }
}

export default AppRouter;
