import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Routes from './routes'

// import { library } from '@fontawesome/fontawesome-svg-core';
// import { faEnvelope, faKey } from '@fontawesome/free-solid-svg-icons';

// library.add(faEnvelope, faKey);

class App extends Component {
  render() {
    return (
      <body>
        <div>
          <Header />
        </div>
        <div>
          <Routes/>
        </div>
      </body>
    );
  }
}

export default App;
