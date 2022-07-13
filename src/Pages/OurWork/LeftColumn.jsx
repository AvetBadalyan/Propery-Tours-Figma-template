import React from "react";
import img1 from "./../../assets/our works/services/01.DRONE TRANSPORT.png";
import img2 from "./../../assets/our works/services/02.REAL ESTATE.png";
import img3 from "./../../assets/our works/services/03.Still photography.png";
import img4 from "./../../assets/our works/services/04.AGENT VIDEO PRESENTATION.jpg";
import img5 from "./../../assets/our works/services/05.SOCIAL MEDIA CONTENT.png";
import img6 from "./../../assets/our works/services/06.virtual slideshow tour.png";
import img7 from "./../../assets/our works/services/07.floor plans.png";
import arrowDown from "./../../assets/our works/arrow.png";
import arrowUp from "./../../assets/our works/arrowUp.png";

export default function LeftColumn() {
  const serviceArray = [
    { img: img1, title: "DRONE (TRANSPORT CANADA LICENCED)" },
    { img: img2, title: "REAL ESTATE CINEMATIC VIDEO" },
    { img: img3, title: "Still photography" },
    { img: img4, title: "AGENT VIDEO PRESENTATION" },
    { img: img5, title: "SOCIAL MEDIA CONTENT PRODUCTION" },
    { img: img6, title: "virtual slideshow tour" },
    { img: img7, title: "floor plans" },
  ];
  return (
    <div className="left-column">
      <div className="arrow-up">
        <img src={arrowUp} alt="arrow-down" height="7.5" width="13" />
      </div>

      {serviceArray.map((service) => {
        return (
          <div key={Math.random()} className="service-box">
            <img src={service.img} alt="service-image" />
            <p className="service-title"> {service.title.toUpperCase()}</p>
          </div>
        );
      })}

      <div className="arrow-down">
        <img src={arrowDown} alt="arrow-down" height="7.5" width="13" />
      </div>
    </div>
  );
}
