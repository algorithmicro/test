import {
    INCREMENT_HAND,
    INIT_HAND,
    RESET_GAME,
} from '../constants/ActionTypes';

function handReducer(state = { turn: 1 }, action) {
    switch (action.type) {
        case INCREMENT_HAND:
            return {
                turn: state.turn + 1,
            };
        case INIT_HAND:
            return {
                turn: 1,
            };
        case RESET_GAME:
            return { turn: 1 };
        default:
            return state;
    }
}

export default handReducer;
