import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../assets/App.css';
import Bolly from '../Bolly.js';


class Image extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <img src={this.props.src} className="gallery-image" onClick={this.imageClicked.bind(this)}></img>
      )
  }
  
  imageClicked() {
    console.log('image clicked!');
  }
}

export default Image;
