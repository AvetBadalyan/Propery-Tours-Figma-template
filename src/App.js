import React from 'react';
import "./App.css"
import Home from './Pages/Home/Home';
import LastUpdates from './Pages/LastUpdates/LastUpdates';
import OurWork from './Pages/OurWork/OurWork';
import Princing from './Pages/Pricing/Princing';
import ServicingArea from './Pages/ServicingArea/ServicingArea';

export default function App() {
  return (
    <div className='app'> 
      <Home />
      <OurWork />
      <Princing />
      <LastUpdates />
      <ServicingArea />
    </div>
  )
}

