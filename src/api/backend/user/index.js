import {post,get} from "../index";

export const getProductsEndpoint = '/api/products/active';
export const getUsersEndpoint = '/api/users';

export const getProducts = () => {
    return get(getProductsEndpoint, {
        baseURL: process.env.REACT_APP_API_URL
    });
}

export const getUsers = () => {
    return get(getUsersEndpoint, {
        baseURL: process.env.REACT_APP_API_URL
    });
}



