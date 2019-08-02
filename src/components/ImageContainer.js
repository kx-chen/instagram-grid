import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../assets/App.css';
import '../assets/ImageContainer.css';
import Bolly from '../Bolly.js';
import Image from './Image.js';
import MoveOptions from './MoveOptions';


class ImageContainer extends Component {
  constructor(props) {
    super(props);
    this.pics = [
      {id: 0, src: "https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop"},
      {id: 1, src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop"},
      {id: 2, src: "https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop"},
      {id: 3, src: "https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop"},
      {id: 4, src: "https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop"},
      {id: 5, src: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop"},
      {id: 6, src: "https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop"},
      {id: 7, src: "https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop"},
      {id: 8, src: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"},
      {id: 9, src: "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop"},
      {id: 10, src: "https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop"},
      {id: 11, src: "https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop"},
    ];
    
    this.state = {
      images: this.pics,
      selected: [],
      showMoveOptions: false,
    };
  }
  
  render() {
    console.log(this.state);
    this.images = this.renderImages();
    
    return (
      <div className="container">
        <MoveOptions show={this.state.showMoveOptions} confirmSwap={this.confirmSwap.bind(this)}/>
        <div className="gallery">
          {this.images}
        </div>
      </div>
      )
  }
  
  handleImageClick(id) {
    // at least one item was selected
      if (this.state.selected.length === 1) {
        // same item selected, deselect it
        if(this.state.selected[0] === id){
          this.setState((state, props) => ({
            selected: [],
            showMoveOptions: false,
        }));
          return;
        }
        
      // set the second selection
       this.setState((state, props) => ({
        selected: [this.state.selected[0], id],
         showMoveOptions: true,
      }));
        
    } else {
      // set first selection
       this.setState((state, props) => ({
        selected: [id],
         showMoveOptions: false,
      }));
    }

  }
  
  renderImages() {
    let renderedImages = [];
        
    this.state.images.forEach((image, index) => {
      let selected = false;
      if(this.state.selected.includes(index)) {
        selected = true;
      }
      renderedImages.push(
      <div className="gallery-item">
				<Image src={image.src} keyId={index} handleClick={this.handleImageClick.bind(this)} selected={selected}/>
				</div>
	    )
    });
    return renderedImages;
  }
  
  confirmSwap(){
    console.log('swapped!');
    let images = this.state.images;
    let temp = this.state.images[this.state.selected[0]];
    images[this.state.selected[0]] = images[this.state.selected[1]];
    images[this.state.selected[1]] = temp;
    
     this.setState((state, props) => ({
       images: images,
       selected: [],
       showMoveOptions: false,
    }));
  }
}

export default ImageContainer;
