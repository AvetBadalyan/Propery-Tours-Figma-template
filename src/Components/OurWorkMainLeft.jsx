import React from 'react';
import "./OurWorkMainLeft.css";
import play from "./../assets/our works/Vector.png";

export default function OurWorkMainLeft() {
  return (
    <div className="our-work-main-left">
      <div>
        <span>Starting </span>
        <span>
          99<sup>$</sup>
        </span>
      </div>
      <div>
        <h1>REAL ESTATE CINEMATIC VIDEO</h1>
      </div>
      <div className="paragraph-real-estate">
        <p>
          Video is THE most effective content type in today's digital marketing
          environment. We offer a truly CUSTOM Video production for Real Estate,
          from music selection to editing style, every detail will be created to
          best showcase your property. On average, 2 -4 min, dynamic Cinematic
          Experience is THE most effective way to create strong engagement and
          generate leads. Delivery: NEXT DAY.
        </p>
      </div>
      <div className="real-estate-buttons">
        <button className="order-now-button">Order now</button>
        <button className="how-it-works-button">
          <img src={play} alt="play button" />
          How it works
        </button>
      </div>
    </div>
  );
}
