import React from "react";
import "./Header.css";
import { ReactComponent as MenuIcon } from "../../assets/align-center.svg";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg px-0 py-1">
        <div className="container-xl">
          <a className="navbar-brand" href="/">
            <img
              src={require("../../assets/Logo.png")}
              alt="logo"
              className="logo_img"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <MenuIcon />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-lg-auto">
              <a
                className="nav-item nav-link active"
                href="#"
                aria-current="page"
              >
                HOME
              </a>
              <a className="nav-item nav-link" href="#">
                CARS
              </a>
              <a className="nav-item nav-link" href="#">
                BOOKING
              </a>
              <a className="nav-item nav-link" href="#">
                ABOUT
              </a>
            </div>
            <div className="navbar-nav ms-lg-4">
              <a className="nav-item nav-link" href="#">
                SIGN UP
              </a>
            </div>
            <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
              <a
                href="#"
                className="btn btn-outline-primary w-full w-lg-auto login"
              >
                LOGIN
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
