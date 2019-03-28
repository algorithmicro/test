import { START_SAVE_QUESTION, START_GUESS_WORD } from '../constants/ActionTypes';
import { questionError, saveQuestion, guessWord } from '../actions/questionActions';
import checkIfExists from '../utils/checkIfExists';
import isDuplicateQuestion from '../utils/isDuplicateQuestion';

function validateQuestionsMiddleWare({ getState, dispatch }) {
    return function (next) {
        return function (action) {
            const state = getState();
            let errorMessage = null;
            let error = false;

            if (action.type === START_SAVE_QUESTION) {
                if (isDuplicateQuestion(action.payload, state.question.history)) {
                    error = true;
                    errorMessage = 'You have asked this question before';
                }
                if (!checkIfExists(action.payload)) {
                    error = true;
                    errorMessage = 'Please fill in the question';
                }

                if (error) {
                    dispatch(questionError(errorMessage));
                } else {
                    dispatch(saveQuestion(action.payload));
                }
            }
            if (action.type === START_GUESS_WORD) {
                if (!checkIfExists(action.payload)) {
                    error = true;
                    errorMessage = 'The guessed word is empty';
                }

                if (error) {
                    dispatch(questionError(errorMessage));
                } else {
                    dispatch(guessWord(action.payload));
                }
            }

            // do all your validation here

            return next(action);
        };
    };
}

export default validateQuestionsMiddleWare;
