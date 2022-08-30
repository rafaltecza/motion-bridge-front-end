import { combineReducers } from 'redux';

import productsReducer from "./Products/products.reducer";
import productsTemporaryReducer from "./ProductsTemporary/productsTemporary.reducer";

const rootReducer = combineReducers({
    addedProducts: productsReducer,
    products: productsTemporaryReducer
})

export default rootReducer