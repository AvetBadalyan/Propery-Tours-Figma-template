import React from "react";
import "./OurWorkTop.css";
import filter1 from "./../../assets/our works/filters/01.all.png";
import filter2 from "./../../assets/our works/filters/02.detached.png";
import filter3 from "./../../assets/our works/filters/03.semi detached.png";
import filter4 from "./../../assets/our works/filters/04.condo.png";
import filter5 from "./../../assets/our works/filters/05.estates.png";
import filter6 from "./../../assets/our works/filters/06.luxury.png";
import filter7 from "./../../assets/our works/filters/07.modern.png";
import filter8 from "./../../assets/our works/filters/08.traditional.png";
import filter9 from "./../../assets/our works/filters/09.classic.png";

export default function OurWorkTop() {
  const categories = [
    { filter: filter1, title: "All" },
    { filter: filter2, title: "Detached" },
    { filter: filter3, title: "Semi detached" },
    { filter: filter4, title: "Condo(hover)" },
    { filter: filter5, title: "Estates" },
    { filter: filter6, title: "Luxury" },
    { filter: filter7, title: "Modern" },
    { filter: filter8, title: "Traditional" },
    { filter: filter9, title: "Classic" },
  ];

  return (
    <div className="our-work-top-part">
      <div className="empty-div"></div>
      <h1>OUR WORK</h1>
      <div className="filter-menu">
        <div className="filter-menu-text">Filter by</div>
        {categories.map((category) => {
          return (
            <button key={Math.random()} className="filter-category-button">
              <img src={category.filter} alt="category-image" />
              <div>{category.title}</div>
            </button>
          );
        })}
        <div className="clear-filter-button">
          <span>X</span>
          <p>Clear</p>
        </div>
      </div>
    </div>
  );
}
