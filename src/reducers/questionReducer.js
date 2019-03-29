import {
    SAVE_QUESTION,
    RESET_QUESTION,
    QUESTION_ERROR,
    GUESS_WORD,
    START_SAVE_QUESTION,
    RESET_GAME,
} from '../constants/ActionTypes';

const initialState = {
    history: [],
    error: false,
    errorMessage: null,
    guessingWord: null,
};

function questionReducer(state = initialState, action) {
    switch (action.type) {
        case START_SAVE_QUESTION:
            return state;
        case SAVE_QUESTION:
            return {
                ...state,
                error: false,
                errorMessage: null,
                history: [action.payload, ...state.history],
            };
        case RESET_QUESTION:
        case RESET_GAME:
            return {
                history: [],
                error: false,
                errorMessage: null,
                guessingWord: null,
            };
        case QUESTION_ERROR:
            return {
                ...state,
                error: true,
                errorMessage: action.payload,
            };
        case GUESS_WORD:
            return {
                ...state,
                guessingWord: action.payload,
            };
        default:
            return state;
    }
}

export default questionReducer;
