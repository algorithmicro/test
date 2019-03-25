import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitQuestion } from '../actions/index';
import Question from '../components/Question/index';

const mapStateToProps = state => ({
    lastQuestion: state.game.currentGame.question.lastQuestion,
    errorOnQuestion: state.game.currentGame.errorOnQuestion,
    questionError: state.game.currentGame.questionError,
});

const mapDispatchToProps = dispatch => ({
    onClick: question => dispatch(submitQuestion(question)),
});

class QuestionContainer extends Component {
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
        const { onClick } = this.props;
        const { value } = this.state;
        onClick(value);
    };

    render() {
        const { lastQuestion, errorOnQuestion, questionError } = this.props;
        const { value } = this.state;
        return (
            <Question
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                lastQuestion={lastQuestion}
                errorOnQuestion={errorOnQuestion}
                questionError={questionError}
                value={value}
            />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(QuestionContainer);
