import { SAVE_WORD_TO_GUESS, RESET_WORD_TO_GUESS, WORD_TO_GUESS_ERROR } from '../constants/ActionTypes';

const initialState = {
    wordToGuess: null,
    error: false,
    errorMessage: null,
};

function questionReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_WORD_TO_GUESS:
            return {
                ...state,
                wordToGuess: action.payload,
            };
        case RESET_WORD_TO_GUESS:
            return {
                initialState,
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
