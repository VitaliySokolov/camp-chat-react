import React, { Component } from 'react';
import autobind from 'autobindr';
import classNames from 'classnames';
import Avatar from '../avatar';
import TimeFromNow from '../time-from-now';
import IconButton from 'material-ui/IconButton';
import Edit from 'material-ui/svg-icons/image/edit';
import Delete from 'material-ui/svg-icons/action/delete-forever';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Draggable } from 'react-drag-and-drop';

class RoomItem extends Component {
    constructor (props) {
        super(props);
        autobind(this);
        this.state = {
            editOpen: false,
            deleteOpen: false,
            newValue: null
        };
    }

    onRoomClick (event) {
        event.preventDefault();
        this.props.toggleChatRoom(this.props.room.id);
    }

    onRoomDoubleClick (event) {
        event.preventDefault();
        console.log('dbl click');
    }

    handleEditClick () {
        this.setState({ editOpen: true, newValue: null });
    }

    handleEditClose () {
        this.setState({ editOpen: false });
    }

    handleEditChange (event) {
        this.setState({ newValue: event.target.value });
    }

    handleEditSubmit () {
        const newValue = this.state.newValue;

        if (newValue !== null
            && newValue !== this.props.room.title)
            this.props.editChatRoom(this.props.room.id, newValue);

        this.setState({ editOpen: false });
    }

    handleDeleteClick () {
        this.setState({ deleteOpen: true });
    }

    handleDeleteClose () {
        this.setState({ deleteOpen: false });
    }

    handleDeleteSubmit () {
        this.props.deleteChatRoom(this.props.room.id);
        this.setState({ deleteOpen: false });
    }

    render () {
        const
            { room, roomId, users, loggedUser } = this.props,
            { title } = room;
        let creator = room.creator;

        if (typeof creator === 'string')
            creator = {
                id: creator,
                username: users.items[creator].username
            };

        const
            roomClassNames = classNames('room', {
                'room--selected': room.id === roomId
            }),
            roomInfo = room.id !== 0
                ? <div>
                    <Avatar
                        user={creator}
                        size={30}
                    />
                    {creator.username}
                </div>
                : null,
            roomTime = room.id !== 0
                ? <TimeFromNow
                    time={room.createdAt}
                    classes="room__last-message-time"
                    ago={false}
                />
                : null;

        const editActions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleEditClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onTouchTap={this.handleEditSubmit}
            />
        ];

        const deleteActions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleDeleteClose}
            />,
            <FlatButton
                label="Delete"
                primary={true}
                onTouchTap={this.handleDeleteSubmit}
            />
        ];

        const deleteButton
            = <IconButton
                onTouchTap={this.handleDeleteClick}
            >
                <Delete />
                <Dialog
                    title="Delete the room"
                    modal={true}
                    open={this.state.deleteOpen}
                    actions={deleteActions}
                >
                    {this.props.room.title}
                </Dialog>
            </IconButton>

            ;
        const editButton
            = <IconButton
                onTouchTap={this.handleEditClick}
            >
                <Edit />
                <Dialog
                    title="Edit the room"
                    modal={true}
                    open={this.state.editOpen}
                    actions={editActions}
                >
                    <TextField
                        id={`${this.props.room.id}`}
                        defaultValue={this.props.room.title}
                        fullWidth={true}
                        multiLine={false}
                        onChange={this.handleEditChange}
                    />
                </Dialog>
            </IconButton>

            ;

        const roomTools = creator && creator.id === loggedUser.id
            ? <div className="room-tools">
                {editButton}
                {deleteButton}
            </div>
            : null;

        return (
            <div
                className={roomClassNames}
                onClick={this.onRoomClick}
                onDoubleClick={this.onRoomDoubleClick}
            >
                <Draggable type="roomid" data={room.id}>
                    <Avatar
                        wrapperClasses="room-logo user-image"
                        title={title}
                        round={false}
                        value="hello" />
                </Draggable>
                <div className="room__info-wrapper">
                    <div className="room__title">
                        {title}
                    </div>
                    {roomInfo}
                </div>
                {roomTools}
                {roomTime}
            </div>
        );
    }
}

export default RoomItem;
