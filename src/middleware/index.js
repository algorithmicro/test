import { INCREMENT_HAND, SUBMIT_QUESTION } from '../constants/ActionTypes';
import { incrementHand, initializeHand, errorOnQuestion } from '../actions/index';
import { DUPLICATE_QUESTION, QUESTION_EMPTY } from '../constants/Errors';
import checkIfExists from '../utils/checkIfExists';
import isDuplicateQuestion from '../utils/isDuplicateQuestion';

function validationMiddleWare({ getState, dispatch }) {
    return function (next) {
        return function (action) {
            const state = getState();
            const currentHand = state.game.currentGame.hand;

            if (action.type === SUBMIT_QUESTION) {
                const isDuplicate = isDuplicateQuestion(
                    action.payload,
                    state.game.currentGame.question.history,
                );
                if (checkIfExists(action.payload) && !isDuplicate) {
                    dispatch(incrementHand());
                } else {
                    if (isDuplicate) {
                        return dispatch(errorOnQuestion(DUPLICATE_QUESTION));
                    }
                    return dispatch(errorOnQuestion(QUESTION_EMPTY));
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

export default validationMiddleWare;
