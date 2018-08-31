import React, { Component } from 'react';
import './App.css';
import Entries from './Entries';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To Do List</h1>
        </header>
        <br />
        <Entries />
      </div>
    );
  }
}

export default App;
