import {
    RESPOND_TRUE, RESPOND_FALSE, RESPOND_INVALID, RESET_GAME,
} from '../constants/ActionTypes';

const initialState = {
    history: [],
    error: false,
    errorMessage: null,
};

function responseReducer(state = initialState, action) {
    switch (action.type) {
        case RESET_GAME:
            return {
                history: [],
                error: false,
                errorMessage: null,
            };
        case RESPOND_TRUE:
            return {
                ...state,
                history: [
                    true,
                    ...state.history,
                ],
            };
        case RESPOND_FALSE:
            return {
                ...state,
                history: [
                    false,
                    ...state.history,
                ],
            };
        case RESPOND_INVALID:
            return {
                ...state,
                history: [
                    'Invalid',
                    ...state.history,
                ],
                error: true,
                errorMessage: action.payload,
            };
        default:
            return state;
    }
}

export default responseReducer;
