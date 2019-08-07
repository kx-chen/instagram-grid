import React, { Component } from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

class ContextMenuImage extends Component {
    render() {
        return (
            <div>
            <ContextMenu id="some_unique_identifier">
                <MenuItem data={{delete: this.props.keyId}} onClick={this.props.handleClick}>
                   Delete
                </MenuItem>
            </ContextMenu>
            </div>
        );
    }
}
export default ContextMenuImage;
