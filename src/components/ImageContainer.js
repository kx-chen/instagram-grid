import React, { Component } from 'react';
import '../assets/App.css';
import '../assets/ImageContainer.css';
import Picture from './Picture.js';
import Upload from './Upload.js';
import { arrayMove, SortableElement, SortableContainer } from 'react-sortable-hoc';
import ContextMenuImage from "./ContextMenu";
import '../assets/react-contextmenu.css';
import Resizer from 'react-image-file-resizer';

const gridStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: 'auto auto auto',
    gridGap: '2px',
};

const Grid = SortableContainer(({ items, disabled }) =>
    <div style={gridStyles}>
          {items.map((image, index) =>
              <GridItem
                  key={`item-${index}`}
                  index={index}
                  value={image}
                  disabled={disabled}
              />
          )}
    </div>
);


const GridItem = SortableElement(({ value, disabled }) =>
        <Picture src={value.src}
                 keyId={value.id}
                 handleClick={() => console.log('click')}
                 selected={false}
                 disabled={disabled}

        />
);

class ImageContainer extends Component {
  constructor(props) {
    super(props);
    this.pics = [
    ];

    this.state = {
      images: this.pics,
      selected: [],
      uploading: false,
      inProgress: 0,
        disabled: false,
    };
  }

  render() {
    return (
      <div className="container">
          <Upload show={true} title="Feed Planner"
                  onChange={this.addImage.bind(this)} done={this.state.done} inProgress={this.state.inProgress}/>
        <div className="gallery">
          <Grid items={this.state.images} disabled={this.state.disabled} onSortEnd={this.onSortEnd} axis="xy" useWindowAsScrollContainer={true}/>
        </div>
          <ContextMenuImage handleClick={this.handleDelete.bind(this)}/>
      </div>
      )
  }

  handleDelete(e, data) {
      let images = this.state.images.filter((image) => {
          return !(image.id === parseInt(data.target.id));
      });
      this.setState((state) => ({
          images: images,
      }));
  }

  toggleSort() {
    this.setState((state) => ({
       disabled: !state.disabled,
    }));
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
      console.log('onSortEnd');
    this.setState({
      images: arrayMove(this.state.images, oldIndex, newIndex),
    });
  };
    addImage(e) {
      const files = Array.from(e.target.files);
      files.forEach(async (file) => {
            let fileUrl;

            // fileUrl = await downscaleImage(fileUrl, 300, 300);

          await Resizer.imageFileResizer(
                file, //is the file of the new image that can now be uploaded...
                600, // is the maxWidth of the  new image
                600, // is the maxHeight of the  new image
                'JPEG', // is the compressFormat of the  new image
                100, // is the quality of the  new image
                0, // is the rotatoion of the  new image
                uri => {
                    fileUrl = uri;
                    console.log(uri);

                    this.setState((state, props) => ({
                        uploading: false,
                        pics: state.images.push({
                            id: state.images.length,
                            src: URL.createObjectURL(fileUrl)
                        }),
                        done: state.done + 1,
                    }));
                },  // is the callBack function of the new image URI
                'blob'  // is the output type of the new image
            );

        });
    }
}

// Take an image URL, downscale it to the given width, and return a new image URL.
async function downscaleImage(dataUrl, newWidth, imageType, imageArguments) {
    return new Promise((resolve) => {
        var image, oldWidth, oldHeight, newHeight, canvas, ctx, newDataUrl;

        // Provide default values
        imageType = imageType || "image/jpeg";
        imageArguments = imageArguments || 0.7;

        // Create a temporary image so that we can compute the height of the downscaled image.
        image = new Image();
        image.src = dataUrl;
        oldWidth = image.width;
        oldHeight = image.height;
        newHeight = Math.floor(oldHeight / oldWidth * newWidth);

        // Create a temporary canvas to draw the downscaled image on.
        canvas = document.createElement("canvas");
        canvas.width = newWidth;
        canvas.height = newHeight;

        // Draw the downscaled image on the canvas and return the new data URL.
        ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, newWidth, newHeight);
        newDataUrl = canvas.toDataURL(imageType, imageArguments);
        resolve(newDataUrl);
    });
}


export default ImageContainer;
