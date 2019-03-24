import React from 'react';

const Hand = ({ currentState, onCLick }) => (
    <div>
        <h1>{currentState.handReducer.currentGame.hand}</h1>
        <button type="button" onClick={onCLick}>
            Increment
        </button>
    </div>
);

export default Hand;
