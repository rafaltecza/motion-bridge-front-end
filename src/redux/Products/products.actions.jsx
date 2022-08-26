import { APPEND_PRODUCT, DELETE_PRODUCT } from './products.types';

export const appendProduct = (product) => {
    return {
        type: APPEND_PRODUCT,
        payload: product
    };
};

export const deleteProduct = (product) => {
    return {
        type: DELETE_PRODUCT,
        payload: product
    };
};