import {
    RESPOND_TRUE, RESPOND_FALSE, RESPOND_INVALID, RESET_GAME,
} from '../constants/ActionTypes';

const initialState = {
    response: null,
    error: false,
    errorMessage: null,
};

function responseReducer(state = initialState, action) {
    switch (action.type) {
        case RESET_GAME:
            return {
                response: null,
                error: false,
                errorMessage: null,
            };
        case RESPOND_TRUE:
            return {
                ...state,
                response: true,
            };
        case RESPOND_FALSE:
            return {
                ...state,
                response: false,
            };
        case RESPOND_INVALID:
            return {
                ...state,
                error: true,
                errorMessage: action.payload,
            };
        default:
            return state;
    }
}

export default responseReducer;
