import React, { Component } from 'react';
import { ContextMenu, MenuItem } from "react-contextmenu";

class ContextMenuImage extends Component {
    render() {
        return (
            <div>
            <ContextMenu id="some_unique_identifier">
                <MenuItem data={{delete: 'single'}} onClick={this.props.handleClick}>
                   Delete
                </MenuItem>
                <MenuItem data={{delete: 'all'}} onClick={this.props.handleClick}>
                    Clear All
                </MenuItem>
            </ContextMenu>
            </div>
        );
    }
}
export default ContextMenuImage;
