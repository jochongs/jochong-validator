const regExps = require('./regExp');

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

    /**
     * @param {Array} inArray
     */
    isIn = (inArray) => {
        if (!this.#validation) return this;

        this.#validation = inArray.includes(this.#data);

        return this;
    }

    isNotEmpty = () => {
        if (!this.#validation) return this;

        if (this.#data === '') {
            this.#validation = false;
        }

        return this;
    }

    isEmail = (regExpString) => {
        if (!this.#validation) return this;

        if (!regExpString) {
            this.#validation = regExps.email.test(this.#data)
        } else {
            const regExp = new RegExp(regExpString);
            this.#validation = regExp.test(this.#data)
        }

        return this;
    }

    isPw = (regExpString) => {
        if (!this.#validation) return this;

        if (!regExpString) {
            this.#validation = regExps.pw.test(this.#data)
        } else {
            const regExp = new RegExp(regExpString);
            this.#validation = regExp.test(this.#data)
        }

        return this;
    }

    isName = (regExpString) => {
        if (!this.#validation) return this;

        if (!regExpString) {
            this.#validation = regExps.name.test(this.#data)
        } else {
            const regExp = new RegExp(regExpString);
            this.#validation = regExp.test(this.#data)
        }

        return this;
    }

    isTime = (regExpString) => {
        if (!this.#validation) return this;

        if (!regExpString) {
            this.#validation = regExps.time.test(this.#data)
        } else {
            const regExp = new RegExp(regExpString);
            this.#validation = regExp.test(this.#data)
        }

        return this;
    }

    isDatetime = (regExpString) => {
        if (!this.#validation) return this;

        if (!regExpString) {
            this.#validation = regExps.datetime.test(this.#data)
        } else {
            const regExp = new RegExp(regExpString);
            this.#validation = regExp.test(this.#data)
        }

        return this;
    }

    isDate = (regExpString) => {
        if (!this.#validation) return this;

        if (!regExpString) {
            this.#validation = regExps.date.test(this.#data)
        } else {
            const regExp = new RegExp(regExpString);
            this.#validation = regExp.test(this.#data)
        }

        return this;
    }

    isOnlyNumber = (regExpString) => {
        if (!this.#validation) return this;

        if (!regExpString) {
            this.#validation = regExps.number.test(this.#data)
        } else {
            const regExp = new RegExp(regExpString);
            this.#validation = regExp.test(this.#data)
        }

        return this;
    }

    isOnlyAlpabet = (regExpString) => {
        if (!this.#validation) return this;

        if (!regExpString) {
            this.#validation = regExps.alpabet.test(this.#data)
        } else {
            const regExp = new RegExp(regExpString);
            this.#validation = regExp.test(this.#data)
        }

        return this;
    }

    isId = (regExpString) => {
        if (!this.#validation) return this;

        if (!regExpString) {
            this.#validation = regExps.id.test(this.#data)
        } else {
            const regExp = new RegExp(regExpString);
            this.#validation = regExp.test(this.#data)
        }

        return this;
    }

    end = () => {
        return this.#validation;
    }
}

module.exports = StringValidator;
