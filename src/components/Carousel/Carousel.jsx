import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div
      id="myCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner custom-carousel-height">
        <div className="carousel-item active">
          <div className="gradiant"></div>
          <img
            // src="https://www.centralgaragegalashiels.co.uk/uploads/newcars/gallery/395/mg-hs-plug-in-hybrid-8.jpg"
            // src="https://www.brownandgammons.co.uk/media/images/52184130/50968576image9.jpg"
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa9oMSy7OgxW48KqQQRECSZbqXqU75Gh-KU3V974ybCha99Y7L39pufFD2kSc5xKrVseI&usqp=CAU"
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzn8YK-ibrokJ4KfT-Nv9UshpWo2W2r6qi45kfS1x86euwjpmJ2gKfVByR9oJfqU1pxAE&usqp=CAU"
            src={require("../../assets/cImage_1.jpg")}
            className="d-block w-100 h-100 cImage"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h3>Drive Into the Future</h3>
            <p>Book Your Ride and Experience the Ultimate Journey.</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="gradiant"></div>
          <img
            src={require("../../assets/cImage_1.jpg")}
            className="d-block w-100 cImage"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h3>On the Road to Memories</h3>
            <p>Book a Car, Create Experiences, and Enjoy the Ride.</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="gradiant"></div>
          <img
            src={require("../../assets/cImage_1.jpg")}
            className="d-block w-100 cImage"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h3>From A to Anywhere</h3>
            <p>Your Next Adventure Starts with a Simple Booking.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
