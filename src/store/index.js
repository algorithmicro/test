import { createStore, applyMiddleware } from 'redux';
import QuestionsMiddleWare from '../middleware/QuestionsMiddleWare';
import WordToGuessMiddleWare from '../middleware/WordToGuessMiddleWare';
import ResponseMiddleWare from '../middleware/ResponseMiddleWare';
import logger from '../middleware/logger';
import combinedReducers from '../reducers/index';

const store = createStore(
    combinedReducers,
    applyMiddleware(
        QuestionsMiddleWare,
        WordToGuessMiddleWare,
        ResponseMiddleWare,
        logger,
    ),
);

export default store;
