import React from 'react';
import {NavLink } from 'react-router-dom';
import "./NavBar.css"

function NavBar() {
    return (
   <>
     <nav className="navbar navbar-expand-lg">
  <div className="container py-3">
    <NavLink className="navbar-brand text-uppercase fw-bolder fs-3" to="/home">START FRAMEWORK</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item px-2">
          <NavLink className="nav-link text-uppercase fw-bolder d-inline-block px-2" aria-current="page" to="/about">About</NavLink>
        </li>
        <li className="nav-item px-2">
          <NavLink className="nav-link text-uppercase fw-bolder d-inline-block px-2" to="/portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item px-2">
          <NavLink className="nav-link text-uppercase fw-bolder d-inline-block px-2" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
   </>

    );
}

export default NavBar;