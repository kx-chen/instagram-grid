import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../assets/App.css';



class MoveOptions extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if(this.props.show){
     return (
      <div className="MoveOptions">
       2 selected. <button onClick={this.props.confirmSwap}>Confirm swap</button>
       </div>
      )
    }
    
    return null;
  }
}

export default MoveOptions;
