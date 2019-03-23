import initialState from '../data/initialState'
import { INCREMENT_HAND, HAND_EXCEEDED } from "../constants/ActionTypes";

function handReducer(state = initialState, action) {
    var clonedState = { ...state };
    switch (action.type) {
        case INCREMENT_HAND:
            clonedState.currentGame.hand ++;
            return clonedState;
        case HAND_EXCEEDED:
            clonedState.currentGame.hand = 0;
            return clonedState;
        default:
            return state;
    }
}

export default handReducer;
