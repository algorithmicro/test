import {
    SAVE_WORD_TO_GUESS,
    RESET_WORD_TO_GUESS,
    WORD_TO_GUESS_ERROR,
    START_WORD_TO_GUESS,
} from '../constants/ActionTypes';

export const saveWordToGuess = word => ({ type: SAVE_WORD_TO_GUESS, payload: word });
export const startWordToGuess = word => ({ type: START_WORD_TO_GUESS, payload: word });
export const resetWordToGuess = () => ({ type: RESET_WORD_TO_GUESS });
export const wordToGuessError = errorMessage => ({
    type: WORD_TO_GUESS_ERROR,
    payload: errorMessage,
});
