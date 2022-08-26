import { combineReducers } from 'redux';

import productsReducer from "./Products/products.reducer";

const rootReducer = combineReducers({
    addedProducts: productsReducer
})

export default rootReducer