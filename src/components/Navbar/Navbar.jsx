import React from "react";
import "./Navbar.css";

export default function Navbar() {
  const menuToggle = () => {
    const nav = document.querySelector(".nav");
    const mobileMenu = document.querySelector("#mobile-menu");
    if (nav != null) {
      nav.classList.toggle("mobile-nav");
      mobileMenu.classList.toggle("is-active");
    }
  };

  return (
    <div class="xBar">
      <div class="nav-wrapper">
        <div class="grad-bar"></div>
        <nav class="navbar">
          <a href="/" class="ah2 rainbow-text">
            MelkorCF
          </a>
          <div class="menu-toggle" id="mobile-menu" onClick={menuToggle}>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
          <ul class="nav no-search">
            <li class="nav-item">
              <a href="#">Home</a>
            </li>
            <li class="nav-item">
              <a href="#">About</a>
            </li>
            <li class="nav-item">
              <a href="#">Work</a>
            </li>
            <li class="nav-item">
              <a href="#">Careers</a>
            </li>
            <li class="nav-item">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
