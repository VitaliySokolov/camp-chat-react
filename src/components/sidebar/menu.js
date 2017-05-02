import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/svg-icons/navigation/menu';

class SidebarMenu extends Component {
  render() {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton
            iconStyle={{
              color: "rgba(255, 255, 255, .87)",
            }}>
            <Menu />
          </IconButton>
        }
        targetOrigin={{
          horizontal: 'right',
          vertical: 'top'
        }}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom',
        }}
      >
        <MenuItem primaryText="Show rooms" />
        <MenuItem primaryText="Show users" />
      </IconMenu>
    );
  }
}

export default SidebarMenu;
