import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/navigation/Nav';
import Splash from './components/Splash';

function App() {
  return (
    <div className="app-container">
      <Nav/>
      <Splash />
    </div>
  );
}

export default App;
