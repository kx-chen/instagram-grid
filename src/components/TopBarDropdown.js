      
      

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../assets/App.css';
import Bolly from '../Bolly.js';


class TopBarDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
    }
  }
  
  render() {
    if(this.props.open) {
      return (
      <ul className="TopBar-dropdown" >
          <li><p>Settings</p></li>
          <hr/>
          <li><a>Remove All Locations</a></li>
          <hr/>
          <li><a target="_blank" href="https://github.com/kx-chen">Developer</a></li>
          <li><a target="_blank" href="https://forms.gle/5F1UWdv5L6YAbAnAA">Feedback</a></li>
      </ul>
      )
    }
    return null; 
  }
}

export default TopBarDropDown;
