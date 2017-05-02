import React, { Component } from 'react';

import SidebarToggle from './toggle';
import SidebarSearch from './search';
import SidebarMenu from './menu';

class SidebarHeader extends Component {
  render() {
    return (
      <header className="sidebar__header">
        <SidebarToggle {...this.props} />
        {/*<SidebarSearch />*/}
        <SidebarMenu />
      </header>
    );
  }
}

export default SidebarHeader;
