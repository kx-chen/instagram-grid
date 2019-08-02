import React, { Component } from 'react';
import '../assets/App.css';


class Image extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let nameClass = "gallery-image";
    let otherName = "not-selected";
    
    if (this.props.selected) {
      nameClass = "gallery-image blur";
      otherName = "gallery-item-info";
    }
    
    let styles = {
      "background-image": `url(${this.props.src})`,
      "width": "150px",
      "height": "150px",
      "background-size": "cover",
    };
    
    return (
			<div className="gallery-item">
				<img src={this.props.src} onClick={() => this.props.handleClick(this.props.keyId)} className="gallery-image" alt=""/>

				<div className={otherName} onClick={() => this.props.handleClick(this.props.keyId)}>
                    Selected
				</div>

			</div>
      )
  }

}

export default Image;
