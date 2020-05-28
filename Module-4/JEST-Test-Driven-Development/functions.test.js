const myFunctions = require("./functions.js");

test("Add 1 to each item in myArray", () => {
    const myArray = [31, 57, 12, 5];
    const unchanged = [31, 57, 12, 5];
    const expected = [32, 58, 13, 6];
    const output = myFunctions.addOne(myArray);

    expect(output).toEqual(expected);
    expect(myArray).toEqual(unchanged);
});

test("Get word lengths", () => {
    const words = ["sun", "potato", "roundabout", "pizza"];
    const expected = [3, 6, 10, 5];

    const output = myFunctions.getWordLengths(words);
    expect(output).toEqual(expected);
});

test("Find the needle", function () {
    const words = ["house", "train", "slide", "needle", "book"];
    const expected = 3;

    const output = myFunctions.findNeedle(words, "needle");
    expect(output).toEqual(expected);
});