import { connect } from 'react-redux';
import { startWordToGuess } from '../actions/wordToGuessActions';
import WordToGuess from '../components/WordToGuess';

const mapStateToProps = state => ({
    word: state.wordToGuess.word,
    error: state.wordToGuess.error,
});

const mapDispatchToProps = dispatch => ({
    onClick: word => dispatch(startWordToGuess(word)),
});
const WordToGuessContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(WordToGuess);

export default WordToGuessContainer;
