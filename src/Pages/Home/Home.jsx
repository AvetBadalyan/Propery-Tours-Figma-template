import React from 'react';
import Header from '../../Components/Header';
import HomeCenter from '../../Components/HomeCenter';
import "./Home.css"

export default function Home() {
  return (
      <div className='home'>
      <Header />
      <HomeCenter />
    </div>
  )
}
