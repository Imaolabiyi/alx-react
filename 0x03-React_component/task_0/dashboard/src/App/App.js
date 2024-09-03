import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    );
  }
}

export default App;
