import React, { Component } from 'react';
// import logo from './logo.svg';
// import './app.css';

import {
  Header,
  Navbar,
  Sidebar,
  Main,
  Footer
} from './layout';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar/>
        <Sidebar/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}
