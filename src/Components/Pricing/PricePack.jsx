import React from "react";
import "./PricePack.css";
import PriceTableLeftColumn from "./PriceTableLeftColumn";
import PriceColumnMid from "./PriceColumnMid";

export default function PricePack() {
  return (
    <div className="price-table">
      <PriceTableLeftColumn />
      <PriceColumnMid />
    </div>
  );
}
