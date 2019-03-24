import { INCREMENT_HAND, HAND_EXCEEDED } from '../constants/ActionTypes';

function checkIfExceededMiddleware({ getState, dispatch }) {
    return function (next) {
        return function (action) {
            const state = getState();
            const currentHand = state.game.currentGame.hand;
            if (action.type === INCREMENT_HAND) {
                if (currentHand > 19) {
                    return dispatch({ type: HAND_EXCEEDED });
                }
            }
            return next(action);
        };
    };
}

export default checkIfExceededMiddleware;
