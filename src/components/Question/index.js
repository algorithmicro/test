import React from 'react';
import {
    Wrapper, TextArea, TextBlock, Button, Error,
} from './styles';

const Question = ({
    lastQuestion,
    handleChange,
    handleSubmit,
    value,
    questionError,
    errorOnQuestion,
}) => (
    <Wrapper>
        <TextBlock lastQuestion={lastQuestion}>{`last question was: ${lastQuestion}`}</TextBlock>
        <TextBlock>Enter the question</TextBlock>
        <Error errorOnQuestion={errorOnQuestion}>{questionError}</Error>
        <TextArea rows={5} value={value} onChange={handleChange} />
        <Button type="button" onClick={handleSubmit}>
            Submit
        </Button>
    </Wrapper>
);
export default Question;
