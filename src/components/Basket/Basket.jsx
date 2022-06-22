import React, { useState, useEffect } from "react";
import "./Basket.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cardActions";
import alertify from "alertifyjs";
import { Link } from "react-router-dom";

function Basket(props) {
  const [qup, setQup] = useState();
  const [quantity, setQuantity] = useState();

  const reloadIA = () => {
    let rqup = []; //sum prices
    let qx = []; // sum product amounts

    props.cart.forEach((c) => {
      rqup.push(c.quantity * c.product.unitPrice);
      qx.push(c.quantity);
    });
    setQup(rqup.reduce((partialSum, a) => partialSum + a, 0));
    setQuantity(qx.reduce((partialSum, a) => partialSum + a, 0));
  };

  useEffect(() => {
    reloadIA();
  }, []);

  const removeFromCart = (product) => {
    props.actions.removeFromCart(product);

    //catch remove and increase the price
    let x = props.cart.find((e) => e.product.id === product.id);
    let ur = x.quantity * x.product.unitPrice;
    setQup(qup - ur);

    //catch remove and increase the amount
    setQuantity(quantity - x.quantity);
    alertify.error(product.productName + " Removed From Bakset");
  };

  const removeC = (product) => {
    removeFromCart(product);
  };

  const checkout = () => {};

  return (
    <div className="Basket">
      <Link to={"/products"} class="productsBack">
        ← Back
      </Link>
      <div class="CartContainer">
        {props.cart.map((cartItem) => (
          <div class="Cart-Items" key={cartItem.product.id}>
            <div class="image-box">
              <img src={cartItem.product.image} style={{ height: "120px" }} />
            </div>
            <div class="about">
              <h5 class="title">{cartItem.product.productName}</h5>
            </div>

            <div class="count">{cartItem.quantity}</div>

            <div class="prices">
              <div class="amount">₺ {cartItem.product.unitPrice}</div>
              <div class="remove">
                <a onClick={() => removeC(cartItem.product)}>Remove</a>
              </div>
            </div>
          </div>
        ))}

        <hr />
      </div>
      <center>
        <div class="checkout">
          {props.cart.length > 0 ? (
            <>
              <div class="total">
                <div>
                  <div class="Subtotal">Sub-Total</div>
                  <div class="items">{quantity} items</div>
                </div>
                <div class="total-amount">{qup}</div>
              </div>
              <button class="buttonCheckout" onClick={() => checkout()}>
                Checkout
              </button>
            </>
          ) : (
            <>
              <h3 className="text-center text-dark">Your Cart is Empty</h3>
            </>
          )}
        </div>
      </center>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
};

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
