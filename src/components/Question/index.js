import React, { PureComponent } from 'react';
import QuestionHistory from '../QuestionHistory';
import {
    Wrapper, TextArea, TextBlock, Button, Error, LastQuestion, Buttons,
} from './styles';

class Question extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    handleSubmit = () => {
        const { startQuestion } = this.props;
        const { value } = this.state;
        startQuestion(value);
        this.setState({ value: '' });
    };

    handleGuessWord = () => {
        const { startGuess } = this.props;
        const { value } = this.state;
        startGuess(value);
        this.setState({ value: '' });
    }

    render() {
        const {
            question: {
                error, errorMessage, history,
            },
            responseHistory,
        } = this.props;

        const { value } = this.state;

        return (
            <Wrapper>
                <LastQuestion>{`last question asked: ${history[0]}`}</LastQuestion>

                <TextBlock>Enter the Question / Guess word</TextBlock>
                <Error errorOnQuestion={error}>{errorMessage}</Error>
                <TextArea
                    rows={5}
                    value={value}
                    onChange={this.handleChange}
                />
                <Buttons>
                    <Button type="button" onClick={this.handleSubmit}>
                        Submit Question
                    </Button>
                    <Button type="button" guess onClick={this.handleGuessWord}>
                        Guess Word
                    </Button>
                </Buttons>
                <QuestionHistory history={history} responseHistory={responseHistory} response />
            </Wrapper>
        );
    }
}

export default Question;
