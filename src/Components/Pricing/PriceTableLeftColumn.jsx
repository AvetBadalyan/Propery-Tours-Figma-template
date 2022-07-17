import React from "react";
import serviceTypes from "./ServiceTypes";
import "./PricePack.css";

export default function PriceTableLeftColumn() {
  return (
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
  );
}
