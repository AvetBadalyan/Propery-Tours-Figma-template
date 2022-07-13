import React from "react";
import "./Header.css";
import telephone from "./../assets/telephone.png";
import cart from "./../assets/cart-icon.png"

export default function Header() {
  return (
    <div>
      <div className="header-mid">
        <p>PRICING</p>
        <p>ORDER A TOUR</p>
        <p>SERVICES</p>
      </div>

      <div className="telephone-box">
        <img src={telephone} alt="telephone" />
        <p className="telephone">(905) 766 9009</p>
      </div>

      <div className="cart-icon">
        <img src={cart} alt="cart-icon" />
      </div>

      <div className="cart-text">
        <p>Cart (0)</p>
      </div>

      <div>
        <button className="signup-button">
          <p className="button-text">Sign in/Sign up</p>
        </button>
      </div>
    </div>
  );
}
