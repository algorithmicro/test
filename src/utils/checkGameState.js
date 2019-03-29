const checkGameState = (word, latestGuess, turn) => {
    if (word !== null && word === latestGuess) {
        return 'Attacker wins';
    }
    if (turn > 20) {
        return 'Defender wins';
    }
    return 'Game Ready';
};

export default checkGameState;
