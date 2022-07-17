import React from "react";
import PricePack from "./PricePack";
import PriceSort from "./PriceSort";
import "./PricingMain.css";

export default function PricingMain() {
  return (
    <div className="pricing-main">
      <PriceSort />
      <PricePack />
    </div>
  );
}
