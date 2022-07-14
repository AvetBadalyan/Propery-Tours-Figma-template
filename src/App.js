import React from 'react';
import "./App.css"
import Home from './Pages/Home/Home';
import OurWork from './Pages/OurWork/OurWork';
import ServicingArea from './Pages/ServicingArea/ServicingArea';

export default function App() {
  return (
    <div className='app'> 
      <Home />
      <OurWork />
      <ServicingArea />
    </div>
  )
}

