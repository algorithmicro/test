const initialState = {
    currentGame: {
        guessWord: false,
        wordToGuess: null,
        question: {
            lastQuestion: null,
            history: [],
        },
        response: false,
        userTurn: 'defender',
        hand: 1,
        errorOnQuestion: false,
        questionError: null,
    },
};

export default initialState;
