import React from 'react';
import "./HomeCenter.css"

export default function HomeCenter() {
    return (
      <div className="center">
        <div className="center-text">CAPTIVATING PROPERY TOURS</div>
        <div className="center-buttons">
          <button className='button1'>Pricing (hover)</button>
          <button className='button2'>Our Work</button>
          <button className='button3'>Order a Tour</button>
        </div>
      </div>
    );
}
