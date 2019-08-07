import React, { Component } from 'react';
import '../assets/App.css';


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
          <li><a target="_blank" href="https://github.com/kx-chen" rel="noopener noreferrer">Developer</a></li>
          <li><a target="_blank" href="https://forms.gle/5F1UWdv5L6YAbAnAA" rel="noopener noreferrer">Feedback</a></li>
      </ul>
      )
    }
    return null; 
  }
}

export default TopBarDropDown;
