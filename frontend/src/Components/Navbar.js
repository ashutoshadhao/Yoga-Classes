import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <div className="d-flex flex-row">
            <NavLink className="navbar-brand" to="/">
              <img
                src="https://toppng.com/uploads/preview/yoga-symbols-yoga-symbol-11562880459o7f1qqvlfs.png"
                alt=""
                width="40"
                height="40"
                className="d-inline-block align-text-top"
              />
            </NavLink>
            <div className="d-flex align-items-center">
              <h5>Yoga Classes</h5>
            </div>
          </div>
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-center "
            id="navbarNav"
          >
            <ul className="nav navbar-nav ">
              <li className="nav-item list_in_nav ">
                <NavLink
                  className="nav-link   navbarMargin"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navbarMargin " to="/features">
                  Features
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navbarMargin" to="/pricing">
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navbarMargin" to="/register">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
