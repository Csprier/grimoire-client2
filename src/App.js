import React from 'react';
import './App.css';

import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <Login />
      {/* <Register /> */}
      <Dashboard />
    </div>
  );
}

export default App;
