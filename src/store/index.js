import { createStore, applyMiddleware } from 'redux';
import checkIfExceededMiddleware from '../middleware/index';
import combinedReducers from '../reducers/index';

const store = createStore(combinedReducers, applyMiddleware(checkIfExceededMiddleware));

export default store;
