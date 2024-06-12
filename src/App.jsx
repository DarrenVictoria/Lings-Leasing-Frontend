import React from 'react'
import {Route , Routes} from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import CarVanCatalouge from './pages/CarVanCatalouge'
// import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/carvan-catalouge' element={<CarVanCatalouge />} />
    </Routes>
  );
};

export default App
