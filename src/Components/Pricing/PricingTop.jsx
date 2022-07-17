import React from "react";
import "./PricingTop.css";

export default function PricingTop() {
  return (
    <div className="pricing-top">
      <div className="pricing-top-text">
        <h1>PRICING</h1>
        <div className="pricing-paragraph">
          <p>
            Please select the sq/ft range of your property in order to see our
            pricing <br /> ( note* sq/ft must include finished basements )
          </p>
        </div>
      </div>
    </div>
  );
}
