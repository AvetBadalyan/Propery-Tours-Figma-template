import React from "react";
import "./PricePack.css";

export default function PricePack() {


  const serviceTypes = [
    {
      img: "1",
      text: "text",
      check: [true, true, true, true, true],
    },
    {
      img: "2",
      text: "text",
      check: [false, true, false, true, true],
    },
    {
      img: "3",
      text: "text",
      check: [false, false, true, true, true],
    },
    {
      img: "4",
      text: "text",
      check: [false, false, false, false, true],
    },
    {
      img: "5",
      text: "text",
      check: [false, false, false, false, true],
    },
    {
      img: "6",
      text: "text",
      check: [true, false, true, false, true],
    },
    {
      img: "7",
      text: "text",
      check: [true, true, true, true, true],
    },
  ];

    const priceColums = [
    { packName: "Photography Slideshow Property Website", price: 149, [serviceTypes[0].text]: true },
    { packName: "Photography Cinematic Video Property Website", price: 259 },
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
        <div className="price-table-empty-div-top">empty div</div>
        <div className="service-types">
          {serviceTypes.map((service) => (
            <div key={Math.random()} className="service-type">
              service-type
            </div>
          ))}
        </div>
        <div className="price-table-empty-div-bottom">empty div</div>
      </div>
      <div className="price-table-main-columns">
        {priceColums.map((column, colIndex) => (
          <div className="price-column">
            <div className="price-column-top">
              <div> {column.price}</div>
              {column.packName}
            </div>
            <div className="price-column-mid">
              {serviceTypes.map((service, serviceIndex) => (
                <div key={Math.random()} className="service-type">
                  {service.check[colIndex] ? <div className="check-true">V</div> : <div>X </div>}
                </div>
              ))}
            </div>
            <div className="price-column-bottom">
              <button className="add-in-cart">
                <i class="fa-solid fa-basket-shopping"></i>
                <p>Add</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
