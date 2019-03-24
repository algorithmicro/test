import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitQuestion } from '../actions/index';
import Attacker from '../components/Attacker/index';

const mapStateToProps = state => ({
    lastQuestion: state.game.currentGame.question,
});

const mapDispatchToProps = dispatch => ({
    onClick: question => dispatch(submitQuestion(question)),
});

class AttackerContainer extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
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
        const { lastQuestion } = this.props;
        const { value } = this.state;
        return (
            <Attacker
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                lastQuestion={lastQuestion}
                value={value}
            />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AttackerContainer);
