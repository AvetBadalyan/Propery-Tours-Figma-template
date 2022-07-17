import React from "react";
import "./OurWorkMain.css";
import OurWorkMainLeft from "./OurWorkMainLeft";
import OurWorkMainRight from "./OurWorkMainRight";
import OurWorkTop from "./OurWorkTop";

export default function OurWorkMain() {
  return (
    <div className="our-work-main">
      <OurWorkTop />
      <div className="our-work-center">
        <OurWorkMainLeft />
        <OurWorkMainRight />
      </div>
    </div>
  );
}
