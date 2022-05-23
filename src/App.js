import './App.css';
import NavBar from './components/NavBar'
import React from 'react';
import Cart from './components/ItemList';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Cart/>
    </div>
  );
}

export default App;
