import {post,get} from "../index";

export const endpoint = '/user';
export const loginEndpoint = '/login';
export const registerEndpoint = '/api/registration';
export const getProductsEndpoint = '/api/products';
export const addProductEndpoint = '/api/products/add';

export const signIn = (data) => {
    return post(loginEndpoint, data, {
        baseURL: process.env.REACT_APP_API_URL
    });
}

export const signUp = (data) => {
    return post(registerEndpoint, data, {
        baseURL: process.env.REACT_APP_API_URL
    });
}

export const refreshToken = (data) => {
return post(endpoint + '/refresh', data, {
        baseURL: process.env.REACT_APP_API_URL
    });
}

export const getProducts = (data) => {
    return get(getProductsEndpoint, data, {
        baseURL: process.env.REACT_APP_API_URL
    });
}

export const addProduct = (data) => {
    return post(addProductEndpoint, data, {
        baseURL: process.env.REACT_APP_API_URL
    });
}

