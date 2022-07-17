import React from "react";
import "./Pricing.css"
import PricingTop from './../../Components/Pricing/PricingTop';
import PricingMain from './../../Components/Pricing/PricingMain';

export default function Princing() {
    return <div className="princing-page">
        <PricingTop />
        <PricingMain />
  </div>;
}
