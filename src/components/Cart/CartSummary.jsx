import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CartSummary.css";
import { connect } from "react-redux";
import { useEffect } from "react";

function CartSummary(props) {
  return (
    <>
      <li className="ulCart">
        <i class="fa fa-shopping-cart"></i>
        <Link to={"/basket"} id="cart">
          &nbsp; Go Basket &nbsp;
        </Link>
        <span class="badge">{props.cart.length}</span>
      </li>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer,
  };
};

export default connect(mapStateToProps)(CartSummary);
