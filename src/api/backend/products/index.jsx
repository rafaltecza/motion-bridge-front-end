import {post, get} from "../index";

export const endpoints = {
    requestProducts: `/products/active`,
    postProduct: `/products/add`,
}

export const requestProducts = (data) => {
    return get(endpoints.requestProducts, data);
}

export const postProduct = (data) => {
    return get(endpoints.postProduct, data);
}