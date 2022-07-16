import React from "react";
import "./PricePack.css";

export default function PricePack() {
  return (
    <div className="price-table">
      <div className="price-table-left-column">
        <div className="price-table-empty-div-top">empty div</div>
        <div className="service-types">
          <div className="service-type"></div>
          <div className="service-type"></div>
          <div className="service-type"></div>
          <div className="service-type"></div>
          <div className="service-type"></div>
          <div className="service-type"></div>
          <div className="service-type"></div>
        </div>
        <div className="price-table-empty-div-bottom">empty div</div>
      </div>
      <div className="price-table-main-columns">
        <div className="price-column">
          <div className="price-column-top"></div>
          <div className="price-column-mid"></div>
          <div className="price-column-bottom"></div>
        </div>
        <div className="price-column">
          <div className="price-column-top">top</div>
          <div className="price-column-mid">
            <div className="price-cell"></div>
            <div className="price-cell"></div>
            <div className="price-cell"></div>
            <div className="price-cell"></div>
            <div className="price-cell"></div>
            <div className="price-cell"></div>
            <div className="price-cell"></div>
          </div>
          <div className="price-column-bottom">bottom</div>
        </div>
        <div className="price-column">
          <div className="price-column-top"></div>
          <div className="price-column-mid"></div>
          <div className="price-column-bottom"></div>
        </div>
        <div className="price-column">
          <div className="price-column-top"></div>
          <div className="price-column-mid"></div>
          <div className="price-column-bottom"></div>
        </div>
        <div className="price-column">
          <div className="price-column-top"></div>
          <div className="price-column-mid"></div>
          <div className="price-column-bottom"></div>
        </div>
      </div>
    </div>
  );
}
