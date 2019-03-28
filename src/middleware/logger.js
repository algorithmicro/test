

function logger({ getState, dispatch }) {
    return function (next) {
        return function (action) {
            const state = getState();
            console.log(state);
            // console.log('action is', action, '\n\n\n\n\n\n\n\n\n\n\n');
            return next(action);
        };
    };
}

export default logger;
