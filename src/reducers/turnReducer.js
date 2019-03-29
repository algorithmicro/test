import {
    CHANGE_TURN,
    RESET_GAME,
} from '../constants/ActionTypes';


function turnReducer(state = 'Player2', action) {
    switch (action.type) {
        case CHANGE_TURN:
            return state === 'Player2' ? 'Player1' : 'Player2';
        case RESET_GAME:
            return 'Player2';
        default:
            return state;
    }
}

export default turnReducer;
