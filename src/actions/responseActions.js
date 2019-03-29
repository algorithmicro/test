import { RESPOND_TRUE, RESPOND_FALSE, RESPOND_INVALID } from '../constants/ActionTypes';

export const respondTrue = () => ({ type: RESPOND_TRUE });
export const respondFalse = () => ({ type: RESPOND_FALSE });
export const invalidQuestion = errorMessage => ({ type: RESPOND_INVALID, error: errorMessage });
