import React from "react";
import "./Testimonials.css";
import photo1 from "./../../assets/additional services/26.AGENT VIDEO PRESENTATION.jpg";
import photo2 from "./../../assets/man.png";
import photo3 from "./../../assets/man1.png";
import star from "./../../assets/star.png"

export default function Testimonials() {
  const TestimonialsArray = [
    {
      img: photo1,
      surname: "John Smith",
      reviewStar: 3,
      reviewText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
    {
      img: photo2,
      surname: "John Smith",
      reviewStar: 5,
      reviewText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
    },
    {
      img: photo3,
      surname: "John Smith",
      reviewStar: 5,
      reviewText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
  ];

  return (
    <div className="Testimonials">
      <div className="Testimonials-content">
        <h1>TESTIMONIALS</h1>
        <div className="all-reviews">
          {TestimonialsArray.map((element) => (
            <div className="single-review">
              <div className="review-image">
                <img src={element.img} />
              </div>
              <div className="review-text">
                {element.surname}
                <p>Lorem Ipsum</p>
                <div className="star">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
                {element.reviewText}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
