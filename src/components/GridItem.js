import Picture from "./Picture";
import { SortableElement } from 'react-sortable-hoc';
import React from 'react';

const GridItem = SortableElement(({ value, disabled }) =>
    <Picture src={value.src}
             keyId={value.id}
             selected={false}
             disabled={disabled}

    />
);

export default GridItem;
