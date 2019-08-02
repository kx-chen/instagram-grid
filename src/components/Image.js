import React, { Component } from 'react';
import '../assets/App.css';


class Image extends Component {
  render() {
    return (
			<div className="gallery-item">
				<img src={this.props.src} onClick={() => this.props.handleClick(this.props.keyId)} className="gallery-image" alt=""/>

				<div className="not-selected" onClick={() => this.props.handleClick(this.props.keyId)}>
                    Selected
				</div>

			</div>
      )
  }

}

export default Image;
