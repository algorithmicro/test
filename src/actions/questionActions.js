import {
    SAVE_QUESTION,
    RESET_QUESTION,
    QUESTION_ERROR,
    GUESS_WORD,
    START_SAVE_QUESTION,
    START_GUESS_WORD,
} from '../constants/ActionTypes';

export const saveQuestion = question => ({ type: SAVE_QUESTION, payload: question });
export const resetQuestion = () => ({ type: RESET_QUESTION });
export const questionError = errorMessage => ({ type: QUESTION_ERROR, payload: errorMessage });
export const guessWord = word => ({ type: GUESS_WORD, payload: word });
export const startGuessWord = word => ({ type: START_GUESS_WORD, payload: word });
export const startSaveQuestion = question => ({ type: START_SAVE_QUESTION, payload: question });
