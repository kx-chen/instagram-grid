import React, { Component } from 'react';
import '../assets/App.css';
import '../assets/ImageContainer.css';
import ContextMenuImage from "./ContextMenu";
import '../assets/react-contextmenu.css';
import Grid from './Grid';


class FeedPlanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      selected: [],
      uploading: false,
      inProgress: 0,
      disabled: false,
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="container-app">
        <h3>Feed Preview</h3>
        <div className="gallery">
          <Grid items={this.state.images} disabled={true}/>
        </div>
        <ContextMenuImage handleClick={console.log('clicked on contextmenu item', this)}/>
      </div>
    )
  }

}

export default FeedPlanner;
