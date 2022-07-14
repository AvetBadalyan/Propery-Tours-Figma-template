import React from "react";
import "./OurWorkMain.css";
import OurWorkTop from "./OurWorkTop";
import OurWorkMainLeft from "./OurWorkMainLeft";
import OurWorkMainRight from "./OurWorkMainRight";

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
