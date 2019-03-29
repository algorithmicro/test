import { START_WORD_TO_GUESS } from '../constants/ActionTypes';
import { saveWordToGuess, wordToGuessError } from '../actions/wordToGuessActions';
import { changeTurn } from '../actions/turnActions';
import checkIfExists from '../utils/checkIfExists';

function WordToGuessMiddleWare({ dispatch }) {
    return function (next) {
        return function (action) {
            if (action.type === START_WORD_TO_GUESS) {
                if (checkIfExists(action.payload)) {
                    dispatch(saveWordToGuess(action.payload));
                    dispatch(changeTurn());
                } else {
                    dispatch(wordToGuessError('Please fill in this field'));
                }
            }

            return next(action);
        };
    };
}

export default WordToGuessMiddleWare;
