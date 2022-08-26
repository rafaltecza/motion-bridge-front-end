import {post,get} from "../index";

export const getProductsEndpoint = '/api/products';
export const getProductsEndpoint = '/api/products/active';
export const addProductEndpoint = '/api/products/add';

export const getProducts = () => {
    return get(getProductsEndpoint, {
        baseURL: process.env.REACT_APP_API_URL
    });
}

export const addProduct = (data) => {
    return post(addProductEndpoint, data, {
        baseURL: process.env.REACT_APP_API_URL
    });
}

