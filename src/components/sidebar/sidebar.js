import React, { Component } from 'react';
import SidebarHeader from './header';

export default class Sidebar extends Component {
  render() {
    return (
      <aside className="sidebar">
        <SidebarHeader {...this.props} />
        {this.props.children}
      </aside>
    );
  }
}

