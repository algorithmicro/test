/* eslint-disable no-nested-ternary */
import React from 'react';
import {
    Wrapper, Item, Text, Row,
} from './styles';

const QuestionHistory = ({ history, responseHistory }) => (
    <div>
        <Text>Question History</Text>
        <Wrapper>
            {history.map((item, index) => (
                <Row key={index.toString()}>
                    <Item>{item}</Item>
                    <Item>
                        {responseHistory[index] === true
                            ? 'true'
                            : responseHistory[index] === false
                                ? 'false'
                                : responseHistory[index] === 'Invalid'
                                    ? 'Invalid'
                                    : ''}
                    </Item>
                </Row>
            ))}
        </Wrapper>
    </div>
);

export default QuestionHistory;
