import { connect } from 'react-redux';
import App from '../components/App';
import checkIfExists from '../utils/checkIfExists';
import checkGameState from '../utils/checkGameState';
import { resetGame } from '../actions';

const mapStateToProps = state => ({
    wordToGuessSet: checkIfExists(state.wordToGuess.word),
    gameState: checkGameState(state.wordToGuess.word, state.question.guessingWord, state.hand.turn),
    turnState: state.turn,
});

const mapDispatchToProps = dispatch => ({
    reset: () => dispatch(resetGame()),
});

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default AppContainer;
