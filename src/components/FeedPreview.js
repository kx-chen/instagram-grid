import React, { Component } from 'react';
import '../assets/App.css';
import '../assets/ImageContainer.css';
import Upload from './Upload.js';
import { arrayMove } from 'react-sortable-hoc';
import ContextMenuImage from "./ContextMenu";
import '../assets/react-contextmenu.css';
import Grid from './Grid';

class FeedPreview extends Component {
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
      let images = localStorage.getItem('images');
      if (images) {
          let otherImage = JSON.parse(images);
          this.setState({
              images: otherImage,
          });
      }
  }

    render() {
    return (
      <div className="container-app">
          <Upload show={true} title={this.props.title}
                  onChange={this.addImage.bind(this)} done={this.state.done} inProgress={this.state.inProgress}/>
        <div className="gallery">
          <Grid items={this.state.images} disabled={this.props.disabled} onSortEnd={this.onSortEnd} axis="xy" useWindowAsScrollContainer={true}/>
        </div>
          <ContextMenuImage handleClick={this.handleDelete.bind(this)}/>
      </div>
      )
  }

  handleDelete(e, data) {
      console.log('handleDelete data', data);
      if(data.delete === 'single') {
          let images = this.state.images.filter((image) => {
              return !(image.id === parseInt(data.target.id));
          });
          this.setState((state) => ({
              images: images,
          }));
          localStorage.setItem('images', JSON.stringify(this.state.images));
      } else if (data.delete === 'all') {
          this.setState({
              images: [],
          });
          localStorage.setItem('images', '');
      }

  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      images: arrayMove(this.state.images, oldIndex, newIndex),
    });
  localStorage.setItem('images', JSON.stringify(this.state.images));
  };

    addImage(e) {
      const files = Array.from(e.target.files);
      files.forEach(async (file) => {
        const width = 200;
        const height = 200;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = event => {
          const img = new Image();
          img.src = event.target.result;
          img.onload = () => {
            const elem = document.createElement('canvas');
            elem.width = width;
            elem.height = height;
            const ctx = elem.getContext('2d');
            // img.width and img.height will contain the original dimensions
            ctx.drawImage(img, 0, 0, width, height);
            console.log(elem.toDataURL());
            this.setState((state, props) => ({
              pics: state.images.push({
                id: state.images.length,
                src: elem.toDataURL()
              }),
            }));
          };
            reader.onerror = error => console.log(error);
        };
    });
}
}

export default FeedPreview;
