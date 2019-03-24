import initialState from '../data/initialState';

function rootReducer(state = initialState) {
    const clonedState = { ...state };
    return clonedState;
}

export default rootReducer;
