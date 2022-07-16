import React from "react";
import PricingMain from "../../Components/PricingMain";
import PricingTop from "../../Components/PricingTop";
import "./Pricing.css"

export default function Princing() {
    return <div className="princing-page">
        <PricingTop />
        <PricingMain />
  </div>;
}
