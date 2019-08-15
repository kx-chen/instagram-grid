import React, { Component } from 'react';
import '../assets/App.css';



class Upload extends Component {
  render() {
      let progress;
      if(this.props.inProgress !== 0) {
          progress = <p>Progress: {this.props.done} / {this.props.inProgress}</p>;
      }
    if(this.props.show){
     return (
         <div className="plan">
             <h3>{this.props.title}</h3>
             <input type='file' id='single' onChange={this.props.onChange} multiple="multiple" title="Add Images"/>
             {progress}
         </div>
        )
    }
    
    return null;
  }
}

export default Upload;
