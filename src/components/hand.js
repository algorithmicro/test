import React from 'react';
import { connect } from 'react-redux';
import incrementHand from '../actions/index';

const mapStateToProps = state => ({ currentState: state });

const mapDispatchToProps = dispatch => ({
    onCLick: () => dispatch(incrementHand()),
});

const ConnectedHand = ({ currentState, onCLick }) => (
    <div>
        <h1>{currentState.handReducer.currentGame.hand}</h1>
        <button type="button" onClick={onCLick}>
            Increment
        </button>
    </div>
);

const Hand = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ConnectedHand);
export default Hand;
