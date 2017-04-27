import React, { Component } from 'react';

const SearchInput = (props) => (
  <input name="search" type="search" value=""
    className="sidebar-search__input" placeholder="search..." />
);

const SearchButton = (props) => (
  <button className="sidebar-search__btn">
    <img src="/img/search.png" alt="s" />
  </button>
)

class SidebarSearch extends Component {
  render() {
    return (
      <div className="sidebar-search">
        <SearchInput />
        <SearchButton />
      </div>
    );
  }
}

export default SidebarSearch;
