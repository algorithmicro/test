import React, { PureComponent } from 'react';

import { Wrapper, Radio, Text } from './styles';

class Response extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            response: '',
        };
    }

    handleChange = (event) => {
        const {
            onTrue, onFalse, invalidQuestion, changeTurn,
        } = this.props;
        if (event.target.value === 'true') {
            onTrue();
        } else if (event.target.value === 'false') {
            onFalse();
        } else {
            invalidQuestion(event.target.value);
        }
        changeTurn();
    };

    render() {
        const { guess } = this.props;
        const { response } = this.state;

        return (
            <div>
                <Text>{guess}</Text>
                <Wrapper>
                    <Text>
                        <Radio
                            type="radio"
                            value="true"
                            checked={response === 'true'}
                            onChange={this.handleChange}
                        />
                        True
                    </Text>
                    <Text>
                        <Radio
                            type="radio"
                            value="false"
                            checked={response === 'false'}
                            onChange={this.handleChange}
                        />
                        False
                    </Text>
                    <Text>
                        <Radio
                            type="radio"
                            value="invalid"
                            checked={response === 'invalid'}
                            onChange={this.handleChange}
                        />
                        Invalid
                    </Text>
                </Wrapper>
            </div>
        );
    }
}

export default Response;
