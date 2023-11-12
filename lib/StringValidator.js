const length = require("./method/length");

class StringValidator {
    validation = true;
    data;

    constructor(data, validation) {
        validation = validation;
        data = data;
    }

    length = length;
}

module.exports = StringValidator;
