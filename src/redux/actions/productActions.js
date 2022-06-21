import * as actionTypes from './actionTypes';

export function getProductsSuccess(product) {
    return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: product }
}

export function getProducts(categoryId) {
    return function (dispatch) {
        let url = "https://62b1fe5720cad3685c877489.mockapi.io/products";
        if (categoryId) {
            url = url + "?categoryId=" + categoryId;
        }
        return fetch(url)
            .then(response => response.json())
            .then(result => dispatch(getProductsSuccess(result)))
    }
}
