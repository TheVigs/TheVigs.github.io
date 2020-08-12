import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the <code>Vignaroli family</code> site.
          Hopefully you see or learn some things. Welcome.
        </p>
        <a
          className="App-link"
          href="https://TheVigs.github.io/about-us"
          target="_blank"
          rel="noopener noreferrer"
        >
          Who are we?
        </a>
      </header>
    </div>
  );
}

export default App;
