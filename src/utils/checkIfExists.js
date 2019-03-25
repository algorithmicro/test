const isWhiteSpaces = (str) => {
    if (str.replace(/\s/g, '').length) {
        return false;
    }
    return true;
};

const checkIfExists = (str) => {
    if (str === null || typeof str === 'undefined' || str === null || isWhiteSpaces(str)) {
        return false;
    }
    return true;
};

export default checkIfExists;
