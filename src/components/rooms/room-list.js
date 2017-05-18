import React, { Component } from 'react';
import { List } from 'material-ui/List';

class RoomList extends Component {
    render () {
        return (
            <List className="room-list">
                {this.props.children}
            </List>
        );
    }
}

export default RoomList;
