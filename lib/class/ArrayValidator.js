const Validator = require("./Validator");

class ArrayValidator extends Validator {
    constructor(data, validation) {
        super(data, validation, false);
    }

    length = (min = -Infinity, max = Infinity) => {
        if (!this._validation) return this;
        if (!this._optional && (!this._data === undefined || !this._data === null)) return this;

        if (this._data.length < min || this._data.length > max) {
            this._validation = false;
        }

        return this;
    };

    isAllNumber = () => {
        if (!this._validation) return this;
        if (!this._optional && (!this._data === undefined || !this._data === null)) return this;

        if (this._data.length === 0)
            this._validation = false;

        for (const element of this._data) {
            if (typeof element !== 'number' || isNaN(element)) {
                this._validation = false;
                break;
            }
        }

        return this;
    }

    isAllString = () => {
        if (!this._validation) return this;
        if (!this._optional && (!this._data === undefined || !this._data === null)) return this;

        if (this._data.length === 0)
            this._validation = false;

        for (const element of this._data) {
            if (typeof element !== 'string') {
                this._validation = false;
                break;
            }
        }

        return this;
    }

    testRegExpAll = (regExpString) => {
        if (!this._validation) return this;
        if (!this._optional && (!this._data === undefined || !this._data === null)) return this;

        if (this._data.length === 0)
            this._validation = false;

        const regExp = new RegExp(regExpString);

        for (const element of this._data) {
            if (typeof element !== 'string') {
                this._validation = false;
                break;
            }

            if (!regExp.test(element)) {
                this._validation = false;
                break;
            }
        }

        return this;
    }
}

module.exports = ArrayValidator;
