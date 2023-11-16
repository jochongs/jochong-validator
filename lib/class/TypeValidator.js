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

    isNumber = () => {
        if (typeof this.#data !== 'number' || isNaN(this.#data)) {
            this.#validation = false;
        }

        return new NumberValidator(this.#data, this.#validation)
    }

    isArray = () => {
        if (!Array.isArray(this.#data)) {
            this.#validation = false;
        }

        return new ArrayValidator(this.#data, this.#validation);
    }
}

module.exports = TypeValidator;
