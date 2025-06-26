import {SAVE_SEARCH_DATA} from "../actions/actionTypes";

const INITIAL_STATE = {
    searchData  :''
}

function commonState(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SAVE_SEARCH_DATA: {
            return { ...state, searchData: action.data };
        }
        default:
            return state;
    }
}

export default commonState;
