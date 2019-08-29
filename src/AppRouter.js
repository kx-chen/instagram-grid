import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import './assets/App.css';
import FeedPreview from './components/FeedPreview.js';
import TopBar from './components/TopBar.js';
import FeedPlanner from "./components/FeedPlanner";


class AppRouter extends Component {
  render() {
    return (
    <Router>
        <TopBar/>
        <Link to="/" className="App-link">Home</Link>
      
        <Route path="/plan" exact render={() => <FeedPreview title="Feed Planner"/>}/>
        <Route path="/preview" exact render={() => <FeedPlanner />}/>
    </Router>
    );
  }
}

export default AppRouter;
