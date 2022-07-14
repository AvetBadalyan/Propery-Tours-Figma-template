import React from 'react';
import Footer from '../../Components/Footer';
import ServicingAreaheader from '../../Components/ServicingAreaheader';
import ServicingAreaMap from '../../Components/ServicingAreaMap';
import "./ServicingArea.css"

export default function ServicingArea() {
  return (
      <div className='servicing-area'>
          <ServicingAreaheader />
          <ServicingAreaMap />
          <Footer />
    </div>
  )
}
