import React from "react";
import classes from "./header.module.css";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <header className={classes.fixedHeader}>
      <div
        className="collapse"
        id="navbarToggleExternalContent"
        style={{ textAlign: "right" }}
      >
        <div className="bg-dark p-4">
          <h5 className="text-white h4">shayan.paul89@gmail.com</h5>
          <span className="text-muted">Shayan Paul</span>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <div style={{ justifyContent: "flex-start" }}>
            <img src={logo} alt="logo" style={{ width: "40px" }} />
          </div>
          <button
            className="navbar-toggler float-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ justifyContent: "end" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
