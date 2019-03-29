import React, { Component } from 'react';
import Routes from './routes/Routes';
import { Footer } from './components/common';
import Navbar from './components/Navbar';

class App extends Component {
 
  render() {
    return (
      <div>
      <Navbar />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
