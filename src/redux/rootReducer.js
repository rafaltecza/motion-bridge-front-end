import { combineReducers } from 'redux';

import alertReducer from './Alert/alert.reducer';

const rootReducer = combineReducers({
    alert: alertReducer,

});

export default rootReducer;