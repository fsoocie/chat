import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from "redux-thunk";
import dialogs from "./reducers/dialogs";
import messages from "./reducers/messages";
import user from "./reducers/user"


const rootReducer = combineReducers({
    dialogs,
    messages,
    user
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
export default createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));