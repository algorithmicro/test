import { INCREMENT_HAND, SUBMIT_QUESTION } from '../constants/ActionTypes';
import { incrementHand, initializeHand } from '../actions/index';
import checkIfExists from '../utils/checkIfExists';

function checkIfExceededMiddleware({ getState, dispatch }) {
    return function (next) {
        return function (action) {
            const state = getState();
            const currentHand = state.game.currentGame.hand;

            if (action.type === SUBMIT_QUESTION) {
                if (checkIfExists(action.payload)) {
                    dispatch(incrementHand());
                }
            }

            if (action.type === INCREMENT_HAND) {
                if (currentHand > 19) {
                    return dispatch(initializeHand());
                }
            }
            return next(action);
        };
    };
}

export default checkIfExceededMiddleware;
