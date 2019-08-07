import React, { Component } from 'react';
import '../assets/App.css';
import '../assets/ImageContainer.css';
import Image from './Image.js';
import Upload from './Upload.js';
import { arrayMove, SortableElement, SortableContainer } from 'react-sortable-hoc';
import ContextMenuImage from "./ContextMenu";
import '../assets/react-contextmenu.css';

const gridStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: 'auto auto auto',
    gridGap: '2px',
};

const gridItemStyles = {
    "height": "calc(89vw / 3)"
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
        <Image src={value.src}
               keyId={value.id}
               handleClick={() => console.log('click')}
               selected={false}
               style={gridItemStyles}
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
        files.forEach((file) => {
            const fileUrl = window.URL.createObjectURL(file);
            console.log(fileUrl);
            this.setState((state, props) => ({
                uploading: false,
                pics: state.images.push({
                    id: state.images.length,
                    src: fileUrl
                }),
                done: state.done + 1,
            }));
        });
    }
}


export default ImageContainer;
