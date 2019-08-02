import React, { Component } from 'react';
import '../assets/App.css';
import '../assets/ImageContainer.css';
import Image from './Image.js';
import { arrayMove, SortableElement, SortableContainer } from 'react-sortable-hoc';

const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridGap: '2px',
};

const gridItemStyles = {
    height: '100px',
    backgroundColor: '#e5e5e5',
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
      {id: 0, src: "https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop"},
      {id: 1, src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop"},
      {id: 2, src: "https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop"},
      {id: 3, src: "https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop"},
      {id: 4, src: "https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop"},
      {id: 5, src: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop"},
      {id: 6, src: "https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop"},
      {id: 7, src: "https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop"},
      {id: 8, src: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"},
      {id: 9, src: "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop"},
      {id: 10, src: "https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop"},
      {id: 11, src: "https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop"},
    ];
    
    this.state = {
      images: this.pics,
      selected: [],
      showMoveOptions: false,
    };
  }

  render() {
    console.log(this.state);
    
    return (
      <div className="container">
        <div className="gallery">
          <Grid items={this.state.images} onSortEnd={this.onSortEnd} axis="xy" />
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
}


export default ImageContainer;
