import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import autobind from 'autobindr';

import Sidebar from '../components/sidebar/sidebar';
import RoomList from '../components/rooms/room-list';
import RoomItem from '../components/rooms/room-item';
import RoomNew from '../components/rooms/room-new';
import UserList from '../components/users/user-list';
import UserItem from '../components/users/user-item';
import UserNew from '../components/users/user-new';

import * as chatActions from '../actions/chatActions';


class SidebarContainer extends Component {
    constructor (props) {
        super(props);
        autobind(this);

        this.state = {
            allUsers: true,
            hideRooms: true,
            open: false
        };
    }

    isSidebarOpened () {
        return this.state.open;
    }

    toggleSidebar () {
        this.setState({open: !this.state.open});
    }

    showAllUsers () {
        this.setState({
            allUsers: true,
            hideRooms: true
        });
    }

    showRoomUsers () {
        this.setState({
            allUsers: false,
            hideRooms: true
        });
    }

    showRooms () {
        this.setState({
            hideRooms: false
        });
    }


    getRooms () {
        const { rooms } = this.props;
        const { toggleChatRoom } = this.props.chatActions;

        return rooms
            ? Object.values(rooms.items).map(room =>
                <RoomItem
                    key={room.id}
                    room={room}
                    toggleChatRoom={toggleChatRoom} />
            ) : null;
    }

    getUsers () {
        let selectedUser = null;
        const { users, selectedMessage } = this.props;

        if (selectedMessage)
            // console.log(selectedMessage.author);
            selectedUser = selectedMessage.author;

        return users
            ? Object.keys(users).map(id =>
                <UserItem
                    key={id}
                    user={users[id]}
                    selectedUser={selectedUser}
                />
            ) : null;
    }

    render () {
        const { addChatRoom } = this.props.chatActions,
            roomsWrapperClass = classNames('rooms-wrapper', {
                hidden: this.state.hideRooms
            }),
            usersWrapperClass = classNames('users-wrapper', {
                hidden: !this.state.hideRooms
            });


        return (
            <Sidebar
                showAllUsers={this.showAllUsers}
                showRoomUsers={this.showRoomUsers}
                showRooms={this.showRooms}
                toggleSidebar={this.toggleSidebar}
                isSidebarOpened={this.isSidebarOpened}
            >
                <div className={roomsWrapperClass}>
                    <RoomList>
                        {this.getRooms()}
                    </RoomList>
                    {this.isSidebarOpened() && <RoomNew addChatRoom={addChatRoom} />}
                </div>
                <div className={usersWrapperClass}>
                    <UserList>
                        {this.getUsers()}
                    </UserList>
                    {!this.state.allUsers && <UserNew /> }
                </div>
            </Sidebar>
        );
    }
}

function mapStateToProps (state) {
    return {
        rooms: state.rooms,
        users: state.users,
        roomId: state.roomId,
        loggedUser: state.auth
    };
}

function mapDispatchToProps (dispatch) {
    return {
        chatActions: bindActionCreators(chatActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SidebarContainer);
