import React, { PureComponent } from 'react';
import { Wrapper, Text, Input } from './styles';

import { Button } from '../Question/styles';

class WordToGuess extends PureComponent {
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
        this.setState({ value: '' });
    };

    render() {
        const { error, word } = this.props;
        const { value } = this.state;
        return (
            <Wrapper>
                <Text error={error}>
                    {/* eslint-disable-next-line no-nested-ternary */}
                    {error
                        ? 'Please fill in this field'
                        : word !== null
                            ? `Word to guess is ${word}`
                            : 'Enter a word to guess'}
                </Text>
                <Input
                    onChange={this.handleChange}
                    error={error}
                    value={value}
                />
                <Button onClick={this.handleSubmit}>Set Word to Guess</Button>
            </Wrapper>
        );
    }
}

export default WordToGuess;
