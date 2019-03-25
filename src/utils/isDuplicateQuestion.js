const isDuplicateQuestion = (str, arr) => {
    if (arr.includes(str)) {
        return true;
    }
    return false;
};

export default isDuplicateQuestion;
