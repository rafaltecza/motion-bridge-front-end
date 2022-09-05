import { SET_PRODUCTS } from './productsTemporary.types';
import {requestProducts} from "../../api/backend/products";

export function loadProducts() {
    return async (dispatch) => {
        return requestProducts().then(res => {
            dispatch(fetchProducts(res.data));
        });
    };
}

export function fetchProducts(products) {
    return {
        type: SET_PRODUCTS,
        payload: products
    };
}