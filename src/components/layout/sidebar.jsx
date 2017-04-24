import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    return (
      <aside className="sidebar">
        <header className="sidebar__header">
          <label className="sidebar__toggle" htmlFor="toggle_sb">
            <span className="toggle-sign"></span>
          </label>
          {/*<div className="sidebar-search">
              <input name="search" type="search" value=""
                className="sidebar-search__input" placeholder="search..." />
              <button className="sidebar-search__btn">
                <img src="/img/search.png" alt="s" />
              </button>
            </div>
            <div className="sidebar__menu">
              <img src="/img/menu.png" alt="menu" />
            </div>*/}
        </header>
        {this.props.children}
      </aside>
    );
  }
}
