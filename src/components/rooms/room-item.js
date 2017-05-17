import React, { Component } from 'react';
import autobind from 'autobindr';
import classNames from 'classnames';
import Avatar from '../avatar';

class RoomItem extends Component {
    constructor (props) {
        super(props);
        this.onRoomClick = this.onRoomClick.bind(this);
    }

    onRoomClick () {
        this.props.toggleChatRoom(this.props.room.id);
    }

    render () {
        const { room } = this.props;
        const { title } = room;

        return (
            <div className="room" onClick={this.onRoomClick}>
                <Avatar title={title} round={false} value="hello"/>
                <div className="room__info-wrapper">
                    <div className="room-title">
                        {title}
                    </div>
                    <div className="room__last-message">Some text</div>

                </div>
                <time className="room__last-message-time">1h</time>
            </div>
        );
    }
}

export default RoomItem;
