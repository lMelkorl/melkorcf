import React, { useEffect } from "react";
import "./ProductList.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cardActions";

import alertify from "alertifyjs";

function ProductList(props) {
  useEffect(() => {
    props.actions.getProducts();
  }, []);

  const addToCart = (product) => {
    props.actions.addToCart({ quantity: 1, product });
    alertify.success(product.productName + " Added to cart !");
  };

  return (
    <div className="container productList">
      <div className="row">
        {props.products.map((product) => (
          <div key={product.id} className="pCard col-sm">
            <img class="card-img-top" src={product.image} alt="" />
            <p class=" text-dark">{product.productName}</p>
            <p className="text-success">{`₺${product.unitPrice}`}</p>
            <button
              onClick={() => addToCart(product)}
              className="smallBtn btn-sm btn-danger"
            >
              Add to Card
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
};

const mapStateToProps = (state) => {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
    cart: state.cartReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
