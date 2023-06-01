// App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import data from './data.json';
import Apartment from './Apartment';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div className="App-content">
          {data.map((apartment) => (
            <Apartment key={apartment.id} title={apartment.title} description={apartment.description} />
          ))}
        </div>

      </div>
    </Router>
  );
}

export default App;
