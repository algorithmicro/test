import {
    SAVE_WORD_TO_GUESS,
    RESET_WORD_TO_GUESS,
    WORD_TO_GUESS_ERROR,
    START_WORD_TO_GUESS,
    RESET_GAME,
} from '../constants/ActionTypes';

const initialState = {
    word: null,
    error: false,
    errorMessage: null,
};

function questionReducer(state = initialState, action) {
    switch (action.type) {
        case START_WORD_TO_GUESS:
            return state;
        case SAVE_WORD_TO_GUESS:
            return {
                ...state,
                error: false,
                errorMessage: null,
                word: action.payload,
            };
        case RESET_WORD_TO_GUESS:
        case RESET_GAME:
            return {
                response: null,
                error: false,
                errorMessage: null,
            };

        case WORD_TO_GUESS_ERROR:
            return {
                ...state,
                errorMessage: action.payload,
                error: true,
            };

        default:
            return state;
    }
}

export default questionReducer;
