import React from "react"; // imr
import propTypes from "prop-types"; // impt
import { Link } from "react-router-dom";
export default function Navbar(props) {
  // rfc
  return (
    <nav
      className={`navbar navbar-${props.mode} navbar-expand-lg shadow-lg bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          {props.title}
        </Link>
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
              <Link to="/developer" className="nav-link">
                {props.aboutbtn}
              </Link>
            </li>
          </ul>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              onClick={props.toggleMode}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: propTypes.string.isRequired,
  aboutbtn: propTypes.string.isRequired,
};

//OR(if isRequired is not used)

Navbar.defaultProps = {
  title: "Set title here",
  aboutbtn: "Set about here",
};
