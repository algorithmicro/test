import { connect } from 'react-redux';
import { respondTrue, respondFalse, invalidQuestion } from '../actions/responseActions';
import { changeTurn } from '../actions/turnActions';
import Reponse from '../components/Response';

const mapStateToProps = state => ({
    guess: state.question.history[0],
});

const mapDispatchToProps = dispatch => ({
    onTrue: () => dispatch(respondTrue()),
    onFalse: () => dispatch(respondFalse()),
    invalidQuestion: () => dispatch(invalidQuestion()),
    changeTurn: () => dispatch(changeTurn()),
});
const ResponseContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Reponse);

export default ResponseContainer;
