class NumberValidator {
    #validation = true;
    #data;

    constructor(data, validation) {
        this.#validation = validation;
        this.#data = data;
    }

    end = () => {
        return this.#validation;
    }
}

module.exports = NumberValidator;