import { combineReducers } from 'redux';
import handReducer from './handReducer';
import questionReducer from './questionReducer';
import wordToGuessReducer from './wordToGuessReducer';
import responseReducer from './responseReducer';
import turnReducer from './turnReducer';


export default combineReducers({
    hand: handReducer,
    question: questionReducer,
    wordToGuess: wordToGuessReducer,
    response: responseReducer,
    turn: turnReducer,
});
