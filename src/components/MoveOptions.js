import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../assets/App.css';



class MoveOptions extends Component {
  render() {
    if(this.props.show){
     return (
         <div>
             <Button variant="primary">+ Add Image</Button>
         </div>
        )
    }
    
    return null;
  }
}

export default MoveOptions;
