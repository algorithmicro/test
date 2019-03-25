import React from 'react';
import { Wrapper, Item } from './styles';

const QuestionHistory = ({ gameState }) => (
    <Wrapper>
        {gameState.currentGame.question.history.map((item, index) => (
            <Item key={index.toString()}>{item}</Item>
        ))}
    </Wrapper>
);

export default QuestionHistory;
