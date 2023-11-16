const Validator = require("./Validator");

class NumberValidator extends Validator {
    constructor(data, validation) {
        super(data, validation, false);
    }

    /**
     * @param {Array} inArray
     */
    isIn = (inArray) => {
        if (!this._validation) return this;

        this._validation = inArray.includes(this._data);

        return this;
    }

    range = (min = -Infinity, max = Infinity) => {
        if (!this._validation) {
            return this;
        }

        if (this._data < min || this._data > max) {
            this._validation = false;
        }

        return this;
    }
}

module.exports = NumberValidator;
