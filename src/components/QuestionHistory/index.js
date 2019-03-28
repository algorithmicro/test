import React from 'react';
import { Wrapper, Item, Text } from './styles';

const QuestionHistory = ({ history }) => (
    <div>
        <Text>Question History</Text>
        <Wrapper>
            {history.map((item, index) => (
                <Item key={index.toString()}>{item}</Item>
            ))}
        </Wrapper>
    </div>
);

export default QuestionHistory;
