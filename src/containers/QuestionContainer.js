import { connect } from 'react-redux';
import Question from '../components/Question';
import {
    resetQuestion,
    questionError,
    guessWord,
    startSaveQuestion,
    startGuessWord,
} from '../actions/questionActions';

const mapStateToProps = state => ({
    question: state.question,
    responseHistory: state.response.history,
});

const mapDispatchToProps = dispatch => ({
    reset: () => dispatch(resetQuestion()),
    setError: error => dispatch(questionError(error)),
    setGuessWord: word => dispatch(guessWord(word)),
    startQuestion: question => dispatch(startSaveQuestion(question)),
    startGuess: question => dispatch(startGuessWord(question)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Question);
