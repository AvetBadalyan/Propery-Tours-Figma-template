import React from "react";
import "./AdditionalServices.css"
    
export default function AdditionalServices() {
  const additionalServicesCards = [
    {
      img: "img",
      title: "Twilight Photography",
      price: 129,
      option1: "24 hours delivery guarantee",
      option2: "x20 HDR professional photos",
      option3: "24 hours delivery guarantee",
    },
    {
      img: "img",
      title: "Agent Video Presentation(hover)",
      price: 129,
      option1: "24 hours delivery guarantee",
      option2: "x20 HDR professional photos",
      option3: "24 hours delivery guarantee",
    },
    {
      img: "img",
      price: 129,
      title: "Matterport",
      option1: "24 hours delivery guarantee",
      option2: "x20 HDR professional photos",
      option3: "24 hours delivery guarantee",
    },
    {
      img: "img",
      price: 129,
      title: "Drone",
      option1: "24 hours delivery guarantee",
      option2: "x20 HDR professional photos",
      option3: "24 hours delivery guarantee",
    },
    {
      img: "img",
      price: 129,
      title: "Twilight Photography",
      option1: "24 hours delivery guarantee",
      option2: "x20 HDR professional photos",
      option3: "24 hours delivery guarantee",
    },
    {
      img: "img",
      price: 129,
      title: "Agent Video Presentation",
      option1: "24 hours delivery guarantee",
      option2: "x20 HDR professional photos",
      option3: "24 hours delivery guarantee",
    },
  ];

  return (
    <div className="additional-services">
      <div className="additional-services-text">
        <h1>{"Additional services".toUpperCase()}</h1>
        <p>
          Customize your experience by adding any additional services to any
          Package
        </p>
      </div>
      <div className="additional-services-cards">
        {additionalServicesCards.map((serviceCard) => (
          <div key={Math.random()} className="single-additional-card">service card</div>
        ))}
      </div>
    </div>
  );
}
