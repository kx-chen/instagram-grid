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
                 selected={false}
                 disabled={disabled}

        />
);

class ImageContainer extends Component {
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
          await Resizer.imageFileResizer(
                file,
                300,
                300,
                'JPEG',
                100,
                0,
                uri => {
                    this.setState((state, props) => ({
                        uploading: false,
                        pics: state.images.push({
                            id: state.images.length,
                            src: uri
                        }),
                        done: state.done + 1,
                    }));
                 document.getElementById('single').value = '';
                },
                'base64'
            );

        });
    }
}


export default ImageContainer;
