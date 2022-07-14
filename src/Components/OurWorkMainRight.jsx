import React from 'react';
import "./OurWorkMainRight.css";
import photo1 from "./../assets/our works/estate/little-image1.png";
import big from "./../assets/our works/estate/big-image.png";
import photo3 from "./../assets/our works/estate/little-image3.png";
import photo4 from "./../assets/our works/estate/little-image4.png";
import photo5 from "./../assets/our works/estate/little-image5.png";
import photo6 from "./../assets/our works/estate/little-image6.png";
import photo7 from "./../assets/our works/estate/little-image7.png";

export default function OurWorkMainRight() {


    return <div className="our-work-main-right">
        <div className='big-image'>
            <img src={big} alt="big image of real estate" />
        </div>
        <div className='little-images'>

        </div>
  </div>;
}
