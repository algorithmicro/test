import { connect } from 'react-redux';
import { submitWordToGuess } from '../actions';
import WordToGuess from '../components/WordToGuess';

const mapStateToProps = state => ({
    wordToGuess: state.game.currentGame.wordToGuess,
});

const mapDispatchToProps = dispatch => ({
    onClick: word => dispatch(submitWordToGuess(word)),
});
const WordToGuessContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(WordToGuess);

export default WordToGuessContainer;
