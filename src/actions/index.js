import { INCREMENT_HAND, SUBMIT_QUESTION } from '../constants/ActionTypes';

export function incrementHand() {
    return { type: INCREMENT_HAND };
}

export function submitQuestion(payload) {
    return {
        type: SUBMIT_QUESTION,
        payload,
    };
}
