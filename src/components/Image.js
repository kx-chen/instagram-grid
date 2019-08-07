import React, { Component } from 'react';


class Image extends Component {
  render() {
    return (
			<div className="gallery-item" style={this.props.style}>
				<img src={this.props.src} onClick={() => this.props.handleClick(this.props.keyId)} className="gallery-image" alt=""/>
			</div>
      )
  }
}

export default Image;
