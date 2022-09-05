import {SET_PRODUCTS} from "./productsTemporary.types";

const defaultState = {
    products: [],
};

const reducer = (state = defaultState, action) => {
    switch(action.type){
        case SET_PRODUCTS:
            return {
                products: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;