import React from 'react';
import "./Home.css"
import Header from './../../Components/Home/Header';
import HomeCenter from './../../Components/Home/HomeCenter';

export default function Home() {
  return (
      <div className='home'>
      <Header />
      <HomeCenter />
    </div>
  )
}
