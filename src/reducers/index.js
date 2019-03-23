import { combineReducers } from 'redux';
import handReducer from './handReducer';
import rootReducer from './rootReducer';

export default combineReducers({
    handReducer,
    rootReducer
})

