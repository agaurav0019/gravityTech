import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          {/* <button
            className="navbar-brand btn "
            style={{ background: "#D9D9D9", borderRadius: "5px" }}
          >
            LOGO
          </button> */}
          <img src="./assets/logo.jpeg" alt="logo" height="100px" width="100px"></img>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </span>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/web" className="dropdown-item">Web Development</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/app">App Development</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/erp">ERP Development</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/cloud">Cloud Management</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/career" className="nav-link">Career</Link>
              </li>
            </ul>

            <button
              className="btn"
              style={{ background: "#0E0E0E", color: "white" }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
