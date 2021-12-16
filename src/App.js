import React from 'react';
import './App.css';
import Nav from './elements/Nav';
import Photographs from './elements/Photographs';
import About from './elements/About';
import Home from './Home';
import ErikBjorgen from './elements/ErikBjorgen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/photographs" element={<Photographs/>} />
          <Route path="/ErikBjorgen" element={<ErikBjorgen/>} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
