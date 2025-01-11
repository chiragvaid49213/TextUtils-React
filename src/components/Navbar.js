import React from "react";
import "./Navbar.css";
import propTypes from "prop-types";

export default function Navbar(props) {
  // Passing Props
  return (
    <nav className="navbar">
      <span className="navLeft">{props.navTitle}</span> {/* Using Props */}
      <span className="navRight">
        <ul>
          <li>Home</li>
          <li>About TextUtils</li>
          <li>Enable Darkmode</li>
        </ul>
      </span>
    </nav>
  );
}

Navbar.propTypes = {
  // PropTypes are constraints on types of props given in app.js
  navTitle: propTypes.string,
};

Navbar.defaultProps = {
  navTitle: "Hello",
};
