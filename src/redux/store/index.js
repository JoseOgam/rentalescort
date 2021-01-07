
import thunk from "redux-thunk";
import rootReducer from "../reducer";

const { createStore, applyMiddleware } = require("redux");
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
const store = createStore(rootReducer, storeEnhancers(applyMiddleware(thunk)))

export default store