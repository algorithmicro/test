import initialState from '../data/initialState';
import {
    INCREMENT_HAND, HAND_EXCEEDED, SUBMIT_QUESTION, QUESTION_ERROR,
} from '../constants/ActionTypes';

function gameReducer(state = initialState, action) {
    const clonedState = { ...state };
    switch (action.type) {
    case INCREMENT_HAND:
        clonedState.currentGame.hand += 1;
        clonedState.currentGame.errorOnQuestion = false;
        clonedState.currentGame.questionError = null;
        return clonedState;
    case HAND_EXCEEDED:
        clonedState.currentGame.hand = 1;
        return clonedState;
    case SUBMIT_QUESTION:
        clonedState.currentGame.question.lastQuestion = action.payload;
        clonedState.currentGame.question.history.push(action.payload);
        return clonedState;
    case QUESTION_ERROR:
        clonedState.currentGame.errorOnQuestion = true;
        clonedState.currentGame.questionError = action.payload;
        return clonedState;
    default:
        return state;
    }
}

export default gameReducer;
