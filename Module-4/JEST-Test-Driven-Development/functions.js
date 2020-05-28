const functions = {
    addOne: myNumbersArray =>
        myNumbersArray.map(number => number + 1),

    getWordLengths: myWordsArray =>
        myWordsArray.map(word => word.length),

    findNeedle: (myWordsArray, word) => myWordsArray.indexOf(word)
};

module.exports = functions;