import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

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
      <Route path='*' element={<Navigate to='/' replace/>}></Route>
    </Routes>
  );
}

export default App;
