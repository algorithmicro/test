import React from 'react';

const Hand = ({ hand, onClick }) => (
    <div>
        <h1>{hand}</h1>
        <button type="button" onClick={onClick}>
            asdasd Increment
        </button>
    </div>
);

export default Hand;
