import { INCREMENT_HAND, SUBMIT_QUESTION, HAND_EXCEEDED } from '../constants/ActionTypes';

export const incrementHand = () => ({ type: INCREMENT_HAND });

export const initializeHand = () => ({ type: HAND_EXCEEDED });

export const submitQuestion = payload => ({
    type: SUBMIT_QUESTION,
    payload,
});
