import React from "react";
import photo1 from "./../../assets/price services/1.HDR Photo ( qty.).png";
import photo3 from "./../../assets/price services/3.scan.png";
import photo4 from "./../../assets/price services/4.dron.png";
import photo6 from "./../../assets/price services/6.instagram.png";
import photo7 from "./../../assets/price services/7.globe.png";

const serviceTypes = [
  {
    img: photo1,
    text: "HDR Photo (/ qty.)",
    check: [true, true, true, true, true],
  },
  {
    img: <i className="fa-brands fa-youtube"></i>,
    text: "Cinematic Video",
    check: [false, true, false, true, true],
  },
  {
    img: photo3,
    text: "3D Matterport Scan",
    check: [false, false, true, true, true],
  },
  {
    img: photo4,
    text: "Drone Photo/Video",
    check: [false, false, false, false, true],
  },
  {
    img: <i className="fa-regular fa-presentation-screen"></i>,
    text: "SLIDESHOW",
    check: [false, false, false, false, true],
  },
  {
    img: photo6,
    text: "Instagram teaser",
    check: [true, false, true, false, true],
  },
  {
    img: photo7,
    text: "Website",
    check: [true, true, true, true, true],
  },
];

export default serviceTypes;
