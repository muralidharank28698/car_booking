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
      <section className="pb-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center mb-4">
              <div className="service-title">
                <span className="subheading">Services</span>
                <h2 className="mb-3">Our Latest Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 text-center mb-3">
              <div className="service-wrap">
                <div className="service-icon">
                  <i className="fa fa-car"></i>
                </div>
                <h4>City Transfer</h4>
                <p>
                  Where Every Ride Is a Seamless Journey, Anywhere in the City.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center mb-3">
              <div className="service-wrap">
                <div className="service-icon">
                  <i className="fa fa-car"></i>
                </div>
                <h4>Airport Transfer</h4>
                <p>
                  On-Time, On-Point, and On Your Terms with Our Premium Transfer
                  Service.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center mb-3">
              <div className="service-wrap">
                <div className="service-icon">
                  <i className="fa fa-car"></i>
                </div>
                <h4>Whole City Tour</h4>
                <p>
                  Our Whole City Tour - Explore Every Corner in Comfort and
                  Style.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
