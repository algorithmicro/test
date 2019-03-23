import React from "react";
import { connect } from "react-redux";
import incrementHand from "../actions/index";

const mapStateToProps = state => {
    return { currentState: state };
};

const mapDispatchToProps = dispatch => {
    return {
        onCLick: () => dispatch(incrementHand())
    };
};

const ConnectedHand = ({ currentState, onCLick }) => {
    return (
        <div>
            <h1>{currentState.handReducer.currentGame.hand}</h1>
            <button onClick={onCLick}>Increment</button>
        </div>
    );
};

const Hand = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectedHand);
export default Hand;
