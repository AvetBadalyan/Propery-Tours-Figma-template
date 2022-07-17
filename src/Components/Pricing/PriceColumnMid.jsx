import React from "react";
import serviceTypes from "./ServiceTypes.js";
import check from "./../../assets/check.png";
import yellowCheck from "./../../assets/yellow check.png";
import priceColums from "./PriceColumns.js";
import "./PricePack.css";

export default function PriceColumnMid() {
  return (
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
  );
}
