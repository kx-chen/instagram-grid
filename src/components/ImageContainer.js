import React, { Component } from 'react';
import '../assets/App.css';
import '../assets/ImageContainer.css';
import Image from './Image.js';
import Upload from './Upload.js';
import { arrayMove, SortableElement, SortableContainer } from 'react-sortable-hoc';

const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridTemplateRows: 'auto auto auto',
    gridGap: '2px',
};

const gridItemStyles = {
    "height": "calc(89vw / 3)"
};


const Grid = SortableContainer(({ items }) =>
    <div style={gridStyles}>
          {items.map((image, index) =>
              <GridItem
                  key={`item-${index}`}
                  index={index}
                  value={image}
              />
          )}
    </div>
);


const GridItem = SortableElement(({ value }) =>
        <Image src={value.src}
               keyId={value.id}
               handleClick={() => console.log('click')}
               selected={false}
               style={gridItemStyles}/>
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
    };
  }

  render() {
    return (
      <div className="container">
          <Upload show={true} title="Feed Planner"
                  onChange={this.addImage.bind(this)} done={this.state.done} inProgress={this.state.inProgress}/>
        <div className="gallery">
          <Grid items={this.state.images} onSortEnd={this.onSortEnd} axis="xy" useWindowAsScrollContainer={true}/>
        </div>
      </div>
      )
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
