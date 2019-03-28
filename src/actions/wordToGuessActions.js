import {
    SAVE_WORD_TO_GUESS,
    RESET_WORD_TO_GUESS,
    WORD_TO_GUESS_ERROR,
} from '../constants/ActionTypes';

export const saveWordTOGUess = word => ({ type: SAVE_WORD_TO_GUESS, payload: word });
export const resetWordTOGUess = () => ({ type: RESET_WORD_TO_GUESS });
export const wordToGuessError = errorMessage => ({
    type: WORD_TO_GUESS_ERROR,
    payload: errorMessage,
});
