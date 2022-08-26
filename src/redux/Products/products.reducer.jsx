import {APPEND_PRODUCT, DELETE_PRODUCT} from "./products.types";

const defaultState = {
    addedProducts: [],
};

const reducer = (state = defaultState, action) => {
    switch(action.type){
        case APPEND_PRODUCT:
            console.log("APPEND_PRODUCT");
            console.log(action.payload);
            console.log(state.addedProducts);
                return { // returning a copy of orignal state
                    ...state, //copying the original state
                    addedProducts: [...state.addedProducts, action.payload] //new todos array
                }
        case DELETE_PRODUCT:
            return {  // returning a copy of orignal state
                ...state,
                addedProducts: state.addedProducts.filter(product => product.id !== action.payload)
            }
        default:
    return state;
    }
}

export default reducer;