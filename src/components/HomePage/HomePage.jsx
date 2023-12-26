import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container">
      <figure className="text-center car-title">
        <p className="lead">Meet you new car</p>
        <p className="h1">Maruti Suzuki DZire</p>
      </figure>
      <div className="text-center top-btns">
        <button type="button" className="btn btn-outline-info ">
          More Info
        </button>
        <button type="button" className="btn btn-primary mx-3">
          Book Now
        </button>
      </div>
      <div className="text-center dashboard-img">
        <img
          src={require("../../assets/HomePageCar.png")}
          className="img-fluid"
          alt="Maruti Suzuki DZire"
        />
      </div>
    </div>
  );
};

export default HomePage;
