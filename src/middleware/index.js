import { INCREMENT_HAND } from "../constants/ActionTypes";
export function checkIfExceededMiddleware({ getState, dispatch }) {
    return function(next) {
        return function(action) {
            var state = getState();
            var currentHand = state.handReducer.currentGame.hand;
            console.log(currentHand);
            if (action.type === INCREMENT_HAND) {
                if (currentHand > 19) {
                    return dispatch({ type: "HAND_EXCEEDED" });
                }
            }
            return next(action);
        };
    };
}
