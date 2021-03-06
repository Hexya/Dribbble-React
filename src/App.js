import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Sort from './Sort.js';
import Grid from './Grid.js';
import Load from './Load.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sort />
        <Grid />
        <Load />
        <Footer />
      </div>
    );
  }
}

export default App;
