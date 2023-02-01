import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import About from './components/about/about';
import Main from './components/main/main';
import Weather from './components/weather/weather';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/weather' element={<Weather />}/>
    </Routes>
  );
}

export default App;
