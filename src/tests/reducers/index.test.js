import rootReducer from "../../reducers/rootReducer";
import handReducer from "../../reducers/handReducer";


describe("reducerTest", () => {
    it("should return the initial state", () => {
        expect(rootReducer(undefined, {})).toEqual(
            {
                currentGame: {
                    guessWord: false,
                    wordToGuess: null,
                    question: null,
                    response: false,
                    userTurn: 'player 1',
                    hand: 0
                }
            }
        );
    });

    it("should handle increment", () => {
        expect(
            handReducer(undefined, { type: "INCREMENT_HAND" })
        ).toEqual(
            {
                currentGame: {
                    guessWord: false,
                    wordToGuess: null,
                    question: null,
                    response: false,
                    userTurn: 'player 1',
                    hand: 1
                }
            }
        );
    });
});
