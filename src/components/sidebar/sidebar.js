import React, { Component } from 'react';
import SidebarHeader from './header';
import classNames from 'classnames';
import autobind from 'autobindr';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      opened: false
    }
  }

  toggleSidebar() {
    this.setState({
      opened: !this.state.opened
    });
  }

  render() {
    const sidebarClassNames = classNames('sidebar', {
      'sidebar--opened': this.state.opened
    });

    return (
      <aside className={sidebarClassNames}>
        <SidebarHeader
          {...this.props}
          toggleSidebar={this.toggleSidebar}
         />
        {this.props.children}
      </aside>
    );
  }
}

