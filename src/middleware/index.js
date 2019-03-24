import { INCREMENT_HAND } from '../constants/ActionTypes';

function checkIfExceededMiddleware({ getState, dispatch }) {
    return function (next) {
        return function (action) {
            const state = getState();
            const currentHand = state.handReducer.currentGame.hand;
            if (action.type === INCREMENT_HAND) {
                if (currentHand > 19) {
                    return dispatch({ type: 'HAND_EXCEEDED' });
                }
            }
            return next(action);
        };
    };
}

export default checkIfExceededMiddleware;
