import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import autobind from 'autobindr';

import { dev } from '../config';

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
            hideRooms: false,
            open: !!dev
        };
    }

    isSidebarOpened () {
        return this.state.open;
    }

    toggleSidebar () {
        this.setState({ open: !this.state.open });
    }

    showAllUsers () {
        this.setState({
            allUsers: true,
            hideRooms: true
        });
    }

    showRoomUsers () {
        // getWSRoomUsers({roomId: this.props.roomId});
        this.setState({
            allUsers: false,
            hideRooms: true
        });
    }

    showRooms () {
        this.setState({
            allUsers: false,
            hideRooms: false
        });
    }


    getRooms () {
        const { rooms, roomId, users, loggedUser } = this.props;
        const {
            toggleChatRoom,
            deleteChatRoom,
            editChatRoom
         } = this.props.chatActions;

        return rooms
            ? Object.values(rooms.items).map(room =>
                <RoomItem
                    key={room.id}
                    room={room}
                    roomId={roomId}
                    users={users}
                    loggedUser={loggedUser}
                    toggleChatRoom={toggleChatRoom}
                    editChatRoom={editChatRoom}
                    deleteChatRoom={deleteChatRoom} />
            ) : null;
    }

    getUsers () {
        let selectedUser = null;
        const { users, selectedMessage, rooms, roomId } = this.props;

        if (selectedMessage)
            // console.log(selectedMessage.author);
            selectedUser = selectedMessage.author;

        const userArray
            = !this.state.allUsers && this.state.hideRooms && roomId
                ? rooms.items[roomId].users
                : Object.keys(users.items);

        return users
            ? userArray.map(id =>
                <UserItem
                    key={id}
                    user={users.items[id]}
                    roomId={roomId}
                    selectedUser={selectedUser}
                />
            ) : null;
    }

    render () {
        const { addChatRoom, inviteUserToRoomByName } = this.props.chatActions,
            roomsWrapperClass = classNames('rooms-wrapper', {
                hidden: this.state.hideRooms
            }),
            usersWrapperClass = classNames('users-wrapper', {
                hidden: !this.state.hideRooms
            }),
            { roomId, rooms, loggedUser } = this.props;


        return (
            <Sidebar
                showAllUsers={this.showAllUsers}
                showRoomUsers={this.showRoomUsers}
                showRooms={this.showRooms}
                toggleSidebar={this.toggleSidebar}
                isSidebarOpened={this.isSidebarOpened}
            >
                <div className={roomsWrapperClass}>
                    <RoomList
                        showRoomUsers={this.showRoomUsers}
                    >
                        {this.getRooms()}
                    </RoomList>
                    {this.isSidebarOpened() && <RoomNew addChatRoom={addChatRoom} />}
                </div>
                <div className={usersWrapperClass}>
                    <UserList
                        showRooms={this.showRooms}
                    >
                        {this.getUsers()}
                    </UserList>
                    {this.isSidebarOpened() && !this.state.allUsers && !!roomId && rooms.items[roomId].creator.id === loggedUser.id
                        && <UserNew inviteUserToRoomByName={inviteUserToRoomByName} />}
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
