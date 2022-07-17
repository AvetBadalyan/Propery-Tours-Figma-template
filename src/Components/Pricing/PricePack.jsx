import React from "react";
import "./PricePack.css";
import check from "./../../assets/check.png";
import photo1 from "./../../assets/price services/1.HDR Photo ( qty.).png";
import photo3 from "./../../assets/price services/3.scan.png";
import photo4 from "./../../assets/price services/4.dron.png";
import photo6 from "./../../assets/price services/6.instagram.png";
import photo7 from "./../../assets/price services/7.globe.png";
import yellowCheck from "./../../assets/yellow check.png";

export default function PricePack() {
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

  const priceColums = [
    {
      packName: "Photography Slideshow Property Website",
      price: 149,
    },
    {
      packName: "Photography Cinematic Video Property Website",
      price: 259,
      added: true,
    },
    {
      packName: "Photography Matterport Slideshow Property Website",
      price: 299,
    },
    {
      packName: "Photography Matterport Cinematic Video Property Website",
      price: 399,
    },
    { packName: "ALL IN", price: 699 },
  ];

  return (
    <div className="price-table">
      <div className="price-table-left-column">
        <div className="price-table-empty-div-top"></div>
        <div className="service-types">
          {serviceTypes.map((service) => (
            <div key={Math.random()} className="service-type">
              <img src={service.img} />
              <div className="service-name">
                <p>{service.text.toUpperCase()}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="price-table-empty-div-bottom"></div>
      </div>
      <div className="price-table-main-columns">
        {priceColums.map((column, colIndex) => (
          <div
            key={Math.random()}
            className={column.added ? "price-column added" : "price-column"}
          >
            <div className="price-column-top">
              <div className="service-price"> {column.price}</div>
              <div className="pack-name"> {column.packName} </div>
            </div>
            <div className="price-column-mid">
              {serviceTypes.map((service, serviceIndex) => (
                <div key={Math.random()} className="service-type">
                  {service.check[colIndex] ? (
                    <div
                      className={
                        column.added ? "check-true added-check" : "check-true"
                      }
                    >
                      {!column.added && <img src={check} alt="check" />}
                      {column.added && <img src={yellowCheck} alt="check" />}
                    </div>
                  ) : (
                    <div
                      className={
                        column.added ? "check-false added-false" : "check-false"
                      }
                    >
                      X
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="price-column-bottom">
              <button
                className={
                  column.added ? "add-in-cart button-added" : "add-in-cart"
                }
              >
                <i className="fa-solid fa-basket-shopping"></i>
                {!column.added && <p>Add</p>}
                {column.added && <p>Added</p>}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
