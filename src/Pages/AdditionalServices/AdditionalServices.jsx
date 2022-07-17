import React from "react";
import "./AdditionalServices.css";
import photo1 from "./../../assets/additional services/15.Still photography.png";
import photo2 from "./../../assets/additional services/26.AGENT VIDEO PRESENTATION.jpg";
import photo3 from "./../../assets/additional services/3.scan.png";
import photo4 from "./../../assets/additional services/4.DRONE TRANSPORT.png";
import photo5 from "./../../assets/additional services/15.Still photography.png";
import photo6 from "./../../assets/additional services/26.AGENT VIDEO PRESENTATION.jpg";

export default function AdditionalServices() {
  const additionalServicesCards = [
    {
      img: photo1,
      title: "Twilight Photography",
      price: 129,
      option1: "24 hours delivery guarantee",
      option2: "x20 HDR professional photos",
      option3: "24 hours delivery guarantee",
    },
    {
      img: photo2,
      title: "Agent Video Presentation",
      price: 129,
      option1: "24 hours delivery guarantee",
      option2: "x20 HDR professional photos",
      option3: "24 hours delivery guarantee",
    },
    {
      img: photo3,
      price: 129,
      title: "Matterport",
      option1: "24 hours delivery guarantee",
      option2: "x20 HDR professional photos",
      option3: "24 hours delivery guarantee",
    },
    {
      img: photo4,
      price: 129,
      title: "Drone",
      option1: "24 hours delivery guarantee",
      option2: "x20 HDR professional photos",
      option3: "24 hours delivery guarantee",
    },
    {
      img: photo5,
      price: 129,
      title: "Twilight Photography",
      option1: "24 hours delivery guarantee",
      option2: "x20 HDR professional photos",
      option3: "24 hours delivery guarantee",
    },
    {
      img: photo6,
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
          <div key={Math.random()} className="single-additional-card">
            <img src={serviceCard.img} alt="image" />
            <div className="price">
              <p>
                <sup>$</sup>
              </p>
              <h1>{serviceCard.price}</h1>
            </div>
            <h2>{serviceCard.title}</h2>
            <button className="additional-services-button">Add to Order</button>
            <ul>
              <li>{serviceCard.option1}</li>
              <li>{serviceCard.option2}</li>
              <li>{serviceCard.option3}</li>
            </ul>
            <button className="quick-preview-button">Quick Preview</button>
          </div>
        ))}
      </div>
    </div>
  );
}
