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
      <img src={this.props.image} width="150" height="150"></img>
      )
  }
}

export default Image;
