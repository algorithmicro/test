import {
    INCREMENT_HAND,
    SUBMIT_QUESTION,
    HAND_EXCEEDED,
    QUESTION_ERROR,
    SUBMIT_WORD_TO_GUESS,
} from '../constants/ActionTypes';

export const incrementHand = () => ({ type: INCREMENT_HAND });

export const errorOnQuestion = payload => ({ type: QUESTION_ERROR, payload });

export const initializeHand = () => ({ type: HAND_EXCEEDED });

export const submitQuestion = payload => ({ type: SUBMIT_QUESTION, payload });

export const submitWordToGuess = payload => ({ type: SUBMIT_WORD_TO_GUESS, payload });
