import React, { Component } from 'react';

import { Authbar } from '../auth';

export class Navbar extends Component {
  render() {
    return (
      <nav className="nav-main">
        <Authbar />
      </nav>
    );
  }
}
