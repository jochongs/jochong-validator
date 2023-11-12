const length = require("./method/length");
const testRegExp = require("./method/testRegExp");

class StringValidator {
    validation = true;
    data;

    constructor(data, validation) {
        validation = validation;
        data = data;
    }

    length = length;
    testRegExp = testRegExp;
}

module.exports = StringValidator;
