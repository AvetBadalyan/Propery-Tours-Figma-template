import React from "react";
import "./PriceSort.css"

export default function PriceSort() {
  const priceArray = [
    { interval: "<1000", selected: true },
    { interval: "1000-1500", selected: false },
    { interval: "1500-2000", selected: false },
    { interval: "2000-3000", selected: false },
    { interval: "3000-4500", selected: false },
  ];

  return (
    <div className="price-sort--row">
      <div className="select-price">Select SQ/FT</div>
      {priceArray.map((priceInterval) => (
        <button
          className={
            priceInterval.selected
              ? "price-interval-button selected-price-interval"
              : "price-interval-button"
          }
        >
          {priceInterval.interval}
        </button>
      ))}
    </div>
  );
}
