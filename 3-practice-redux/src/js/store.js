import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";


var createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

import userReducer from "./reducers/user";

var reducers = combineReducers({
	userReducer: userReducer
});


var store = createStoreWithMiddleware(reducers);

export default store;