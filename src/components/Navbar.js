import React from "react"; // imr
import propTypes from "prop-types"; // impt

export default function Navbar(props) {
  // rfc
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
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
              <a className="nav-link" href="/about">
                {props.aboutbtn}
              </a>
            </li>
          </ul>
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
