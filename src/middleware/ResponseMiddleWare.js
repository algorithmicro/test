import { RESPOND_INVALID } from '../constants/ActionTypes';
// import { saveWordToGuess, wordToGuessError } from '../actions/wordToGuessActions';
import { questionError } from '../actions/questionActions';
// import checkIfExists from '../utils/checkIfExists';

function ResponseMiddleWare({ dispatch }) {
    return function (next) {
        return function (action) {
            if (action.type === RESPOND_INVALID) {
                dispatch(questionError('Please ask a valid question'));
            }

            return next(action);
        };
    };
}

export default ResponseMiddleWare;
