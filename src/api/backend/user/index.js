import {post,get} from "../index";

export const getProductsEndpoint = '/api/products/active';
export const addProductEndpoint = '/api/products';

export const getProducts = () => {
    return get(getProductsEndpoint, {
        baseURL: process.env.REACT_APP_API_URL
    });
}



