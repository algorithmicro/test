import React from 'react';
import {
    Wrapper, TextArea, TextBlock, Button,
} from './styles';

const Attacker = ({
    lastQuestion, handleChange, handleSubmit, value,
}) => (
    <Wrapper>
        <TextBlock>Enter the question</TextBlock>
        <TextBlock>{`last question was: ${lastQuestion}`}</TextBlock>
        <TextArea value={value} onChange={handleChange} />
        <Button type="button" onClick={handleSubmit}>
            Submit
        </Button>
    </Wrapper>
);
export default Attacker;
