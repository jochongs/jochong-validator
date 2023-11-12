const StringValidator = require("./lib/StringValidator");

class TypeValidator {
    #validation = true;
    #data;

    constructor(data) {
        this.#data = data;
    }

    isString = () => {
        if (typeof this.#data !== 'string') {
            this.#validation = false;
        }

        return new StringValidator(this.#data, this.#validation)
    }
}

const validator = (data) => {
    const myVlidateData = new TypeValidator(data);

    return myVlidateData;
};

module.exports = validator;
