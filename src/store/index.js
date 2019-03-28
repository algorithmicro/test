import { createStore, applyMiddleware } from 'redux';
import validateQuestionsMiddleWare from '../middleware/validateQuestionsMiddleWare';
import logger from '../middleware/logger';
import combinedReducers from '../reducers/index';

const store = createStore(combinedReducers, applyMiddleware(validateQuestionsMiddleWare, logger));

export default store;
