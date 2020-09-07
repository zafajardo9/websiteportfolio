import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Body from './Components/Body'

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <div className="App">
      <h1>Zacks</h1>
    </div>
    <Body />
    </>
  );
}

export default App;
