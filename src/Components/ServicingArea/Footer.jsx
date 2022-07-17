import React from "react";
import "./Footer.css";
import clock from "./../../assets/clock.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-col">
          <div>
            <a>Services </a>
          </div>
          <div>
            <a>PRICING</a>
          </div>
          <div>
            <a>ORDER A TOUR</a>
          </div>
          <div>
            <a>Sign IN / SIGN UP </a>
          </div>
        </div>

        <div className="social-links">
          <div className="contact">
            <i
              className="fa-solid fa-mobile-screen-button"
  
            ></i>
            <p>(000) 000 0000</p>
          </div>
          <div className="clock">
            <img src={clock} width="18" height="18" />
            <p>10:00 АМ - 18:00 PM</p>
          </div>
          <div className="soc-media">
            <div>
              <a>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div>
              <a>
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div>
              <a>
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
