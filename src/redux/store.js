import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from "redux-thunk";
import dialogs from "./reducers/dialogs";
import messages from "./reducers/messages";


const rootReducer = combineReducers({
    dialogs,
    messages
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
export default createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));