import React, { useState } from "react";
import "./Header.css";
import Modal from "react-bootstrap/Modal";
import { ReactComponent as MenuIcon } from "../../assets/align-center.svg";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

const Header = () => {
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleClose = () => setToggle(false);
  const handleShow = () => setToggle(true);

  const handleLoginShow = () => setShow(true);

  return (
    <>
      <nav className="navbar navbar-expand-lg px-0 py-1">
        <div className="container-xl">
          <a className="navbar-brand" href="/">
            <img
              src={require("../../assets/Logo.png")}
              alt="logo"
              className="logo_img"
            />
          </a>
          <>
            <Button
              // className="navbar-toggler"
              className="navbar-toggler d-lg-none btn-primary hambagarBtn"
              // type="button"
              // data-bs-toggle="collapse"
              // data-bs-target="#navbarCollapse"
              // aria-controls="navbarCollapse"
              // aria-expanded="false"
              // aria-label="Toggle navigation"
              onClick={handleShow}
            >
              <MenuIcon />
            </Button>
            <Offcanvas
              show={toggle}
              onHide={handleClose}
              placement="end"
              className="off-canvas"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <h1 className="heading">
                    Jayasree<span>Travels</span>
                  </h1>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Link
                  className="nav-item mb nav-link active"
                  to="/"
                  aria-current="page"
                >
                  HOME
                </Link>
                <Link className="nav-item mb nav-link" to="/cars">
                  CARS
                </Link>
                <Link className="nav-item mb nav-link" to="/booking">
                  BOOKING
                </Link>
                <Link className="nav-item mb nav-link" to="/aboutUs">
                  ABOUT
                </Link>
                <div class="d-grid gap-2 my-3">
                  <button
                    class="btn btn-outline-info"
                    type="button"
                    onClick={handleLoginShow}
                  >
                    Log In
                  </button>
                  <button class="btn btn btn-info" type="button">
                    Sign Up
                  </button>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-lg-auto">
              <Link
                className="nav-item nav-link active"
                to="/"
                aria-current="page"
              >
                HOME
              </Link>
              <Link className="nav-item nav-link" to="/cars">
                CARS
              </Link>
              <Link className="nav-item nav-link" to="/booking">
                BOOKING
              </Link>
              <Link className="nav-item nav-link" to="/aboutUs">
                ABOUT
              </Link>
            </div>
            <div className="navbar-nav ms-lg-4">
              <Link className="nav-item nav-link" href="#">
                SIGN UP
              </Link>
            </div>
            <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
              <Link
                className="btn btn-outline-primary w-full w-lg-auto login"
                onClick={handleLoginShow}
              >
                LOGIN
              </Link>
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
    </>
  );
};

export default Header;
