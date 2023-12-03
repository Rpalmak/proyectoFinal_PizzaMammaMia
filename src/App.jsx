import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbarr from './components/Navbarr';
import MainComponent from './components/MainComponent';
import { PizzaProvider } from './my_context'

import Home from './views/Home';
import Carrito from './views/Carrito';
import Pizza from './views/Pizza';

function App() {
  return (
    <>
      <PizzaProvider>
        <Navbarr />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/pizza/:id' element={<Pizza />} />
          <Route path='/carrito' element={<Carrito />} />
        </Routes>
      </PizzaProvider>
    </>
  );
}


export default App;
