import { connect } from 'react-redux';
import incrementHand from '../actions/index';
import Hand from '../components/Hand';

const mapStateToProps = state => ({ currentState: state });

const mapDispatchToProps = dispatch => ({
    onCLick: () => dispatch(incrementHand()),
});

const HandContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Hand);

export default HandContainer;
