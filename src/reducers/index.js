import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
// import rootReducer from './rootReducer';

export default combineReducers({
    game: gameReducer,
    // root: rootReducer,
});
