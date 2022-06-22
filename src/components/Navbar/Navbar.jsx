import React from "react";
import "./Navbar.css";
import defaultpng from "../img/default.png";
import CartSummary from "../Cart/CartSummary";
import { Link } from "react-router-dom";

export default function Navbar() {
  const user = true;

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
          <ul class="nav">
            <li class="nav-item">
              <a href="/">Home</a>
            </li>
            <li class="nav-item">
              <a href="#">About</a>
            </li>
            <li class="nav-item">
              <a href="#">Contact</a>
            </li>
            {user ? (
              <>
                <li class="nav-item">
                  <a href="/products">Products</a>
                  {/* <Link to={"/products"} id="cart">
                    Products
                  </Link> */}
                </li>
                &nbsp;
                <img className="topImg" src={defaultpng} />
              </>
            ) : (
              <>
                <li class="nav-item">
                  <a href="/login">Login</a>
                </li>
                <li class="nav-item">
                  <a href="/register">Register</a>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
