import { SortableContainer } from 'react-sortable-hoc';
import React from 'react';
import GridItem from "./GridItem";

const gridStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: 'auto auto auto',
    gridGap: '2px',
    width: '100vw',
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


export default Grid;
