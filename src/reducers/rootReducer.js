import initialState from '../data/initialState'

function rootReducer(state = initialState, action) {
    var clonedState = { ...state };
    return clonedState;
}

export default rootReducer;
