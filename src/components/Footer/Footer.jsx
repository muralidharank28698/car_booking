import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid footer-container">
      <footer
        id="Footer"
        className="page-footer font-small stylish-color-dark pt-4"
      >
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-4 mx-auto">
              <h5 className="text-uppercase font-weight-bold mt-3 mb-4">
                About our Site
              </h5>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "70px" }}
              />
              <p>
                Explore the world with ease. Book your ride now for seamless
                adventures.
                {/* Seamless booking, carefree journeys. Experience hassle-free
                travel planning with our easy reservation system. Your next
                adventure is just a click away. */}
              </p>
            </div>
            <hr className="clearfix w-100 d-md-none" />
            <div
              id="link10"
              className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"
            >
              <h6 className="text-uppercase font-weight-bold">Highlights</h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "70px" }}
              />

              <a href="#" className="nav-link footer-link">
                HOME
              </a>
              <a href="#" className="nav-link footer-link">
                CARS
              </a>
              <a href="#" className="nav-link footer-link">
                BOOKING
              </a>
              <a href="#" className="nav-link footer-link">
                ABOUT
              </a>
            </div>
            <hr className="clearfix w-100 d-md-none" />
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase font-weight-bold">Contact</h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <i class="fa fa-home mx-2" aria-hidden="true"></i>
                No 70, 3rd Cross <br />
                Thendral Nagar, New Saram,
                <br /> Puducherry 605013
              </p>
              <p>
                <i class="fa fa-envelope mx-2"></i>
                jayasreekrishnamurthy60@gmail.com
              </p>
              <p>
                <i class="fa fa-phone mx-2" aria-hidden="true"></i> + 91 97891
                91827
              </p>
            </div>
          </div>
        </div>
        <hr />
        <ul className="list-unstyled list-inline text-center py-2">
          <li className="list-inline-item">
            <h5 className="mb-1">Register for free</h5>
          </li>
          <li className="list-inline-item">
            <a
              href="#"
              className="btn btn-outline-primary btn-rounded w-full w-lg-auto login"
            >
              Sign up!
            </a>
          </li>
        </ul>
        <hr />
        <div className="hover-effect1">
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <a href="https://www.facebook.com/codewithfaraz" title="Facebook">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.twitter.com/codewithfaraz" title="Twitter">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.youtube.com/@codewithfaraz" title="Youtube">
                <i className="fa fa-youtube"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#." title="Github">
                <i className="fa fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-copyright text-center py-3">
          Copyright© 2024: Design and Develop by Jayasree Travels
        </div>
      </footer>
    </div>
  );
};

export default Footer;
