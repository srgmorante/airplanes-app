import React, { Component } from 'react';
import HeaderComponent from '../../00-components/header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent/>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
