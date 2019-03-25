import { createStore, applyMiddleware } from 'redux';
import validationMiddleWare from '../middleware/index';
import combinedReducers from '../reducers/index';

const store = createStore(combinedReducers, applyMiddleware(validationMiddleWare));

export default store;
