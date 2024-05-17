import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div class="container">
        <a class="navbar-brand" href="index.html">
          Tasty
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="oi oi-menu"></span> Menu
        </button>
        <div class="collapse justify-content-end navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link to="/" class="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <a href="menu.html" class="nav-link">
                Menu
              </a>
            </li>
            <li class="nav-item">
              <Link to="/basket" class="nav-link">
                Basket
              </Link>
            </li>
            <li class="nav-item">
              <a href="reservation.html" class="nav-link">
                Reservation
              </a>
            </li>
            <li class="nav-item">
              <a href="blog.html" class="nav-link">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a href="about.html" class="nav-link">
                About
              </a>
            </li>
            <li class="nav-item">
              <a href="contact.html" class="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
