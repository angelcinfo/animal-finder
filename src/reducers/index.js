import { combineReducers } from "redux";
import commonState from "./commonState";

const rootReducer = combineReducers({
    common: commonState,
});

export default rootReducer;
