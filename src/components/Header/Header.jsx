import React, { useState } from "react";
import "./Header.css";
import Modal from "react-bootstrap/Modal";
import { ReactComponent as MenuIcon } from "../../assets/align-center.svg";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

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
                className="btn btn-outline-primary w-full w-lg-auto login"
                onClick={handleShow}
              >
                LOGIN
              </a>
            </div>
          </div>
        </div>
      </nav>
      <>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          size="lg"
          className="model"
        >
          <Modal.Body style={{ padding: 0 }}>
            <div className="grid">
              <div className="order__left centered">
                <div className="form">
                  <div className="logo">
                    <h4 style={{ color: "#0dcaf0" }}>Login</h4>
                    {/* <img
                      className="img"
                      src={require("../../assets/Logo.png")}
                      alt="picture"
                      style={{ width: "100px" }}
                    /> */}
                  </div>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Email"
                    autocomplete="off"
                  />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    autocomplete="off"
                  />

                  <div className="justify__space_between">
                    <span>
                      <input
                        type="checkbox"
                        id="remember_me"
                        name="remember_me"
                        value="remember_me"
                      />
                      <label for="remember_me" className="remember_me">
                        Remember Me
                      </label>
                      <br />
                    </span>
                    <a href="#" className="forgot__password">
                      Forgot Password?
                    </a>
                  </div>

                  <button type="submit" className="login__button">
                    Login
                  </button>

                  <div className="signup">
                    <label className="remember_me">
                      Don't have an account?
                    </label>
                    <a
                      href="#"
                      className="forgot__password"
                      style={{ textDecoration: "none" }}
                    >
                      <strong>Sign up for free.</strong>
                    </a>
                  </div>
                </div>
              </div>

              <div className="order__right centered no__overflow text-center">
                <img
                  className="img loginImage"
                  src={require("../../assets/about_us.jpg")}
                  alt="picture"
                />
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
};

export default Header;
