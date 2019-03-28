import React from 'react';
import { Wrapper } from './styles';
import Screen from '../Screen';
import HandContainer from '../../containers/HandContainer';
import QuestionContainer from '../../containers/QuestionContainer';

const App = () => (
    <Wrapper>
        <Screen active>
            <HandContainer />
            <QuestionContainer />
        </Screen>
        <Screen active>
            {/* <WordToGuessContainer /> */}
        </Screen>
    </Wrapper>
);
export default App;
