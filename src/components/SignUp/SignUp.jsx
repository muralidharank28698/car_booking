import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signUp-Container container-fluid">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign up</h2>
            {/* <i className="fa fa-user"></i> */}
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              autocomplete="off"
            />
            {/* <i className="fa fa-envelope"></i> */}
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Email"
              autocomplete="off"
            />
            {/* <i className="fa fa-lock"></i> */}
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              autocomplete="off"
            />
            <button type="submit" className="login__button">
              Sign up
            </button>
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fa fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h2>New here ?</h2>
            <h3>
              {/* Journey Beyond Limits with Jayasree Travels: Sign Up for
                Automotive Excellence */}
              Explore with Jayasree Travels - Sign Up for a World of Adventure!
            </h3>
            <p>
              {/* Embark on a journey through automotive innovation with Jayasree
              Travels. Join us by signing up, and experience a realm where
              passion meets performance, and every drive is a celebration of
              precision and style. */}
              Embark on an automotive innovation journey with Jayasree Travels.
              Sign up to experience a realm where passion meets precision in
              every drive.
            </p>
          </div>

          <img
            src={require("../../assets/HomePageCar.png")}
            className="image"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
