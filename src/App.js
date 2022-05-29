import './App.css';
import NavBar from './components/NavBar'
import React from 'react';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemContainer/>
    </div>
  );
}

export default App;
