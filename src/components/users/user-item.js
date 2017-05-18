import React, { Component } from 'react';
import autobind from 'autobindr';
import classNames from 'classnames';
import ReactEmoji from 'react-emoji';

import Avatar from '../avatar';
import TimeFromNow from '../time-from-now';

class UserItem extends Component {
    constructor (props) {
        super(props);
        autobind(this);
    }

    render () {
        const { user, selectedUser, roomId } = this.props;

        const { username } = user;
        const userClassName = classNames('user', {
            'bg-red': selectedUser && selectedUser.username === user.username
        });
        let
            lastMessageText = '',
            lastMessageTime = '';

        if (user.rooms && roomId in user.rooms) {
            lastMessageText = user.rooms[roomId].lastMessage;
            lastMessageTime = user.rooms[roomId].lastMessageTime;
        }

        return (
            <div className={userClassName}>
                <Avatar user={user} />
                <div className="user__info-wrapper">
                    <div className="user__name">{username}</div>
                    <div className="user__last-message">{
                        ReactEmoji.emojify(
                            lastMessageText,
                            { attributes: { width: '15px', height: '15px' } }
                        )}</div>
                </div>
                <TimeFromNow time={lastMessageTime} classes="user__last-message-time" />
            </div>
        );
    }
}

export default UserItem;
