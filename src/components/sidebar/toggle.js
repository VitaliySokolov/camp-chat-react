import React, { Component } from 'react';

class SidbarToggle extends Component {
  render() {
    return (
      <label className="sidebar__toggle" htmlFor="toggle_sb">
        <span className="toggle-sign"></span>
      </label>
    );
  }
}

export default SidbarToggle;
