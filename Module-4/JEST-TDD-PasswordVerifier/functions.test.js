const myFunctions = require("./functions.js");

test("Paswoord heeft een minimale score van 3", () => {

    const expectedScore = 3;

    //const output = myFunctions("Ben" + 99);
    const output = myFunctions("Ben");

    console.log('Expected Score = ' + expectedScore + ' Output Score = '  + output.score)
    
    expect(output.score).toBeGreaterThanOrEqual(expectedScore);
    expect(output.valid).toBe(true)

});
