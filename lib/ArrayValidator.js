class ArrayValidator {
    #validation = true;
    #data;

    constructor(data, validation) {
        this.#validation = validation;
        this.#data = data;
    }

    length = (min = -Infinity, max = Infinity) => {
        if (!this.#validation) return this;

        if (this.#data.length < min || this.#data.length > max) {
            this.#validation = false;
        }

        return this;
    };

    isAllNumber = () => {
        if (!this.#validation) return this;

        if (this.#data.length === 0)
            this.#validation = false;

        for (const element of this.#data) {
            if (typeof element !== 'number' || isNaN(element)) {
                this.#validation = false;
                break;
            }
        }

        return this;
    }

    isAllString = () => {
        if (!this.#validation) return this;

        if (this.#data.length === 0)
            this.#validation = false;

        for (const element of this.#data) {
            if (typeof element !== 'string') {
                this.#validation = false;
                break;
            }
        }

        return this;
    }

    end = () => {
        return this.#validation;
    }
}

module.exports = ArrayValidator;
