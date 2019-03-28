import { connect } from 'react-redux';
import Hand from '../components/Hand/index';

const mapStateToProps = state => ({ hand: state.hand.turn });

const HandContainer = connect(
    mapStateToProps,
)(Hand);

export default HandContainer;
