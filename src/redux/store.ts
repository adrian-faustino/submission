import totalWorktime from "./reducers/totalWorktimeReducer";
import { createStore, combineReducers, compose } from "redux";

const rootReducer = combineReducers({
  totalWorktime,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());
