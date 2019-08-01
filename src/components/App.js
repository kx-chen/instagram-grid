import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../assets/App.css';
import Bolly from '../Bolly.js';


class App extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <Bolly is="so solly!"/>
      )
  }
}

export default App;
