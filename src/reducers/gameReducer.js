import initialState from '../data/initialState';
import { INCREMENT_HAND, HAND_EXCEEDED, SUBMIT_QUESTION } from '../constants/ActionTypes';

function gameReducer(state = initialState, action) {
    const clonedState = { ...state };
    switch (action.type) {
    case INCREMENT_HAND:
        clonedState.currentGame.hand += 1;
        return clonedState;
    case HAND_EXCEEDED:
        clonedState.currentGame.hand = 0;
        return clonedState;
    case SUBMIT_QUESTION:
        clonedState.currentGame.question = action.payload;
        return clonedState;
    default:
        return state;
    }
}

export default gameReducer;
