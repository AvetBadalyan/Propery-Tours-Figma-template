import React from 'react';
import "./App.css"
import Home from './Pages/Home/Home';
import LastUpdates from './Pages/LastUpdates/LastUpdates';
import OurWork from './Pages/OurWork/OurWork';
import ServicingArea from './Pages/ServicingArea/ServicingArea';

export default function App() {
  return (
    <div className='app'> 
      <Home />
      <OurWork />
      <LastUpdates />
      <ServicingArea />
    </div>
  )
}

