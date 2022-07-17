import React from 'react';
import "./ServicingArea.css"
import ServicingAreaheader from './../../Components/ServicingArea/ServicingAreaheader';
import ServicingAreaMap from './../../Components/ServicingArea/ServicingAreaMap';
import Footer from './../../Components/ServicingArea/Footer';

export default function ServicingArea() {
  return (
      <div className='servicing-area'>
          <ServicingAreaheader />
          <ServicingAreaMap />
          <Footer />
    </div>
  )
}
