import { connect } from 'react-redux';
import { incrementHand } from '../actions/index';
import Hand from '../components/Hand/index';

const mapStateToProps = state => ({ hand: state.game.currentGame.hand });

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(incrementHand()),
});

const HandContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Hand);

export default HandContainer;
