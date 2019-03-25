import React from 'react';
import {
    Wrapper, TextArea, TextBlock, Button,
} from './styles';

const Attacker = ({
    lastQuestion, handleChange, handleSubmit, value,
}) => (
    <Wrapper>
        <TextBlock lastQuestion={lastQuestion}>{`last question was: ${lastQuestion}`}</TextBlock>
        <TextBlock>Enter the question</TextBlock>
        <TextArea rows={5} value={value} onChange={handleChange} />
        <Button type="button" onClick={handleSubmit}>
            Submit
        </Button>
    </Wrapper>
);
export default Attacker;
