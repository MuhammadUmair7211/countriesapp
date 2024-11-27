import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Countries App
        </a>
        <div className="d-flex" role="search">
          <i className="fa-regular fa-moon me-3 fs-5"></i>
          Dark Mode
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
