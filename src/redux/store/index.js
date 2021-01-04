import { createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer";
import composeWithDevTools from 'redux-devtools-extension'

const middleware = [thunk]
const store = createStore(
    rootReducer,
    composeWithDevTools(...middleware)
)
export default store