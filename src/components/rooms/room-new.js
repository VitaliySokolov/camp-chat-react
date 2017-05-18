import React, { Component } from 'react';
import autobind from 'autobindr';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class RoomNew extends Component {
    constructor (props) {
        super(props);
        autobind(this);
        this.state = {
            open: false,
            value: null
        };
    }

    handleAddChange (event) {
        this.setState({
            value: event.target.value
        });
        // console.log(this.state.value);
    }

    handleAddSubmit () {
        const value = this.state.value.trim();

        if (value)
            this.props.addChatRoom(this.state.value);
        this.setState({
            open: false,
            value: null
        });
    }

    render () {
        const addActions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={() => this.setState({ open: false })}
            />,
            <FlatButton
                label="Add"
                primary={true}
                onTouchTap={this.handleAddSubmit}
            />
        ];

        return (
            <form className="room-new" onSubmit={this.handleSubmit}>
                <FloatingActionButton
                    secondary={true}
                    onTouchTap={() => this.setState({ open: true })}>
                    <ContentAdd />
                <Dialog
                    title="Add new room"
                    modal={true}
                    open={this.state.open}
                    actions={addActions}
                >
                    <TextField
                        id="add_room"
                        fullWidth={true}
                        multiLine={false}
                        onChange={this.handleAddChange}
                    />
                </Dialog>

                </FloatingActionButton>
                {/* <input type="text"
                    className="room-new__input"
                    placeholder="new room..."
                    ref={input => this.input = input} />
                <button className="room-new__add">Add</button>*/}
            </form >
        );
    }
}

export default RoomNew;
