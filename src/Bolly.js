import React, { Component } from 'react';

class Bolly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0
    };
  }
  
  render() {
    return (
      <div>
        <h1>Bolly is {this.props.is}</h1>
        <p>Bolly clicked {this.state.clicked}</p>
        <button onClick={()=>this.bollyClick()}>Bollyify</button>
      </div>
    )
  }
  
  bollyClick() {
    this.setState((state, props) => ({
      clicked: this.state.clicked + 1,
    }));
  }
}

export default Bolly;
