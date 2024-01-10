import React from "react";
import "./HomePage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
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
                    Where Every Ride Is a Seamless Journey, Anywhere in the
                    City.
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
                    On-Time, On-Point, and On Your Terms with Our Premium
                    Transfer Service.
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
        <section className="about-section">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="title">About Us</span>
                  <h2>
                    Empowering Your Journeys: Seamless Car Rentals with Jayasree
                    travels
                  </h2>
                </div>
                <div className="text">
                  Welcome to Jayasree travels, where convenience meets
                  adventure. We pride ourselves on offering a seamless and
                  user-friendly platform for all your car rental needs. With an
                  extensive fleet catering to diverse preferences, transparent
                  pricing, and a commitment to safety, we strive to redefine
                  your travel experience. Join us on the road to hassle-free
                  journeys - because every mile should be memorable.
                </div>
                <div className="btn-box">
                  <a href="#" className="theme-btn btn-style-one">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <div className="author-desc">
                  <h2>Explore More</h2>
                  <span>Jayasree travels</span>
                </div>
                <figure className="image-1">
                  <a href="#" className="lightbox-image" data-fancybox="images">
                    <img src={require("../../assets/about_us.jpg")} alt="" />
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
