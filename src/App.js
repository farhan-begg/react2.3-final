import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Starwars from './components/Starwars'

function App() {
  return (
    <div className="App">
      <Home title={"FEW 2.3 Single Page Applications"} />
      <Starwars />
    </div >
  );
}

export default App;
