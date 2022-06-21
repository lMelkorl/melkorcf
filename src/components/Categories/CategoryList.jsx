import React, { useEffect } from "react";
import "./CategoryList.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";
import CartSummary from "../Cart/CartSummary";
import initialState from "../../redux/reducers/initialState";

function CategoryList(props) {
  useEffect(() => {
    props.actions.getCategories();
  }, []);

  const selectCategory = (category) => {
    props.actions.changeCategory(category);
    props.actions.getProducts(category.id);
  };

  const selectAllCategories = () => {
    props.actions.changeCategory(initialState.currentCategory);
    props.actions.getProducts();
  };

  return (
    <div className="categoryList">
      <br />
      <div className="clst">
        <h3 className="">
          <span class="text-secondary">Categories</span>
        </h3>
        <div className="">
          <CartSummary />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div class="scrollmenu">
          <a onClick={() => selectAllCategories()}>All</a>
          {props.categories.map((category) => (
            <a onClick={() => selectCategory(category)} key={category.id}>
              {category.categoryName}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
