class StringValidator {
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

    testRegExp = (regExpString) => {
        if (!this.#validation) return this;

        const regExp = new RegExp(regExpString);
        this.#validation = regExp.test(this.#data);

        return this;
    };

    end = () => {
        return this.#validation;
    }
}

module.exports = StringValidator;
