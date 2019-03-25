import { connect } from 'react-redux';
import QuestionHistory from '../components/QuestionHistory/index';

const mapStateToProps = state => ({
    gameState: state.game,
});

const QuestionHistoryContainer = connect(
    mapStateToProps,
)(QuestionHistory);

export default QuestionHistoryContainer;
