import React, { Component } from 'react';
import { ContextMenuTrigger } from 'react-contextmenu';


class Image extends Component {
  render() {
      const style = {
          height: '100%'
      };
    return (
			<div className="gallery-item" style={this.props.style}>
                <ContextMenuTrigger id="some_unique_identifier" style={style} keyId={this.props.keyId}>
                    <img src={this.props.src} onClick={() => this.props.handleClick(this.props.keyId)} className="gallery-image" alt="" id={this.props.keyId}/>
                </ContextMenuTrigger>
			</div>
      )
  }
}

export default Image;
