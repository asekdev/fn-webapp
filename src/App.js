import React, { Component } from 'react';
import './App.css';
import CustNavbar from './components/CustNavbar';
import Routes from './routes/Routes';
import { Footer } from './components/common/index';

class App extends Component {
  render() {
    return (
    <div>
      <CustNavbar />
      <Routes />
      <Footer />
    </div>
    );
  }
}

export default App;
