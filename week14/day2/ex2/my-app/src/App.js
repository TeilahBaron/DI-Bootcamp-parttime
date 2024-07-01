import React from 'react';
import './App.css';
import Events from './Events'; // Import the Events component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Events Component</h1>
        <Events /> {/* Use the Events component */}
      </header>
    </div>
  );
}

export default App;
