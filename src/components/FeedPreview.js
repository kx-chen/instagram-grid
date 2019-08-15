import React, { Component } from 'react';
import '../assets/App.css';
import '../assets/ImageContainer.css';
import Upload from './Upload.js';
import { arrayMove } from 'react-sortable-hoc';
import ContextMenuImage from "./ContextMenu";
import '../assets/react-contextmenu.css';
import Grid from './Grid';

/**
 *
 * @author Onur Zorluer.
 *
 */
class Resizer {

  static changeHeightWidth(height, maxHeight, width, maxWidth) {
    if (width > maxWidth) {
      height = Math.round(height * maxWidth / width);
      width = maxWidth;
    }
    if (height > maxHeight) {
      width = Math.round(width * maxHeight / height);
      height = maxHeight;
    }
    return {height, width}
  }

  static resizeAndRotateImage(image, maxHeight, maxWidth, compressFormat = "jpeg" , quality = 100, rotation = 0) {
    var qualityDecimal = quality / 100;
    var canvas = document.createElement('canvas');

    var ctx = canvas.getContext("2d");

    if(rotation) {
      ctx.rotate(rotation * Math.PI / 180);
      if (rotation === 90) {
        ctx.translate(0, -canvas.width);
      } else if (rotation === 180) {
        ctx.translate(-canvas.width, -canvas.height);
      } else if (rotation === 270) {
        ctx.translate(-canvas.height, 0);
      } else if (rotation === 0 || rotation === 360) {
        ctx.translate(0, 0);
      }
    }
    ctx.drawImage(image, 0, 0, 300, 300);

    return canvas.toDataURL(`image/${compressFormat}`, qualityDecimal);
  }

  static b64toBlob(b64Data, contentType) {
    contentType = contentType || 'image/jpeg';
    var sliceSize = 512;

    var byteCharacters = atob(b64Data.toString().replace(/^data:image\/(png|jpeg|jpg);base64,/, ''));
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }

  static createResizedImage(file, maxWidth, maxHeight, compressFormat, quality, rotation, responseUriFunc, outputType = 'base64') {
    var blob = null
    const reader = new FileReader();
    if(file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        var image = new Image();
        image.src = reader.result;
        image.onload = function () {
          var resizedDataUrl = Resizer.resizeAndRotateImage(image, maxWidth, maxHeight, compressFormat, quality, rotation);
          blob = Resizer.b64toBlob(resizedDataUrl, `image/${compressFormat}`);
          outputType === 'blob' ?
            responseUriFunc(blob)
            :
            responseUriFunc(resizedDataUrl)
        };
      };
      reader.onerror = error => {
        responseUriFunc(error)
      };
    } else {responseUriFunc('File Not Found')}
  }
}


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
        const fileName = file.name;
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
