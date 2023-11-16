class NumberValidator {
    #validation = true;
    #data;

    constructor(data, validation) {
        this.#validation = validation;
        this.#data = data;
    }

    /**
     * @param {Array} inArray
     */
    isIn = (inArray) => {
        if (!this.#validation) return this;

        this.#validation = inArray.includes(this.#data);

        return this;
    }

    range = (min = -Infinity, max = Infinity) => {
        if (!this.#validation) {
            return this;
        }

        if (this.#data < min || this.#data > max) {
            this.#validation = false;
        }

        return this;
    }

    end = () => {
        return this.#validation;
    }
}

module.exports = NumberValidator;