const Validator = require("./Validator");

class NumberValidator extends Validator {
    constructor(data, validation, optional) {
        super(data, validation, optional);
    }

    /**
     * @param {Array} inArray
     */
    isIn = (inArray) => {
        if (!this._validation) return this;
        if (this._optional && (this._data === undefined || this._data === null)) return this;

        this._validation = inArray.includes(this._data);

        return this;
    }

    range = (min = -Infinity, max = Infinity) => {
        if (!this._validation) return this;
        if (this._optional && (this._data === undefined || this._data === null)) return this;

        if (this._data < min || this._data > max) {
            this._validation = false;
        }

        return this;
    }
}

module.exports = NumberValidator;
