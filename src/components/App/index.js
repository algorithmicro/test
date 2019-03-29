import React from 'react';
import { Wrapper, GameState, Button } from './styles';
import Screen from '../Screen';
import HandContainer from '../../containers/HandContainer';
import QuestionContainer from '../../containers/QuestionContainer';
import WordToGuessContainer from '../../containers/WordToGuessContainer';
import ResponseContainer from '../../containers/ResponseContainer';

const App = ({
    wordToGuessSet, gameState, reset, turnState,
}) => (
    <div>
        <GameState green={gameState === 'Game Ready'}>{gameState}</GameState>
        {gameState !== 'Game Ready' && (
            <Button type="button" onClick={reset}>
                Reset Game
            </Button>
        )}
        <Wrapper>
            <Screen
                active={
                    // eslint-disable-next-line no-nested-ternary
                    gameState !== 'Game Ready'
                        ? false
                        : turnState === 'Player1'
                }
            >
                <HandContainer />
                <QuestionContainer />
            </Screen>
            <Screen
                active={
                    // eslint-disable-next-line no-nested-ternary
                    gameState !== 'Game Ready'
                        ? false
                        : turnState === 'Player2'
                }
            >
                {!wordToGuessSet ? (
                    <WordToGuessContainer />
                ) : (
                    <ResponseContainer />
                )}
            </Screen>
        </Wrapper>
    </div>
);
export default App;
