import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Routes from './routes'
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes/>
      </div>
    );
  }
}

export default App;
