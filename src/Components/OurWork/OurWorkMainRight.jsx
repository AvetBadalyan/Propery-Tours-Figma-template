import React from "react";
import "./OurWorkMainRight.css";
import photo1 from "./../../assets/our works/estate/little-image1.png";
import big from "./../../assets/our works/estate/big-image.png";
import photo3 from "./../../assets/our works/estate/little-image3.png";
import photo4 from "./../../assets/our works/estate/little-image4.png";
import photo5 from "./../../assets/our works/estate/little-image5.png";
import photo6 from "./../../assets/our works/estate/little-image6.png";
import photo7 from "./../../assets/our works/estate/little-image7.png";
import arrowLeft from "./../../assets/our works/estate/arrow left.png";
import arrowRight from "./../../assets/our works/estate/arrow right.png";

export default function OurWorkMainRight() {
  const estatePhotosArray = [
    { photo: photo1 },
    { photo: big },
    { photo: photo3 },
    { photo: photo4 },
    { photo: photo5 },
    { photo: photo6 },
    { photo: photo7 },
  ];
  return (
    <div className="our-work-main-right">
      <div className="big-image">
        <img src={big} alt="big image of real estate" />
      </div>
      <div className="little-images">
        <div className="arrows-little-images">
          <span>
            <img src={arrowRight} className="arrow-left-for-little-images" />
          </span>
          <span>
            <img src={arrowLeft} className="arrow-left-for-little-images" />
          </span>
        </div>
        {estatePhotosArray.map((photo) => (
          <img key={Math.random()} src={photo.photo} className="little-image" />
        ))}
      </div>
    </div>
  );
}
