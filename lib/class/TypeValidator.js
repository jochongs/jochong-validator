const StringValidator = require('./StringValidator');
const NumberValidator = require('./NumberValidator');
const ArrayValidator = require('./ArrayValidator');
const Validator = require('./Validator');

class TypeValidator extends Validator {
    constructor(data, validation = true, optional = false) {
        super(data, validation, optional);
    }

    isString = () => {
        if (this._optional && (this._data === undefined || this._data === null)) {
            return new StringValidator(this._data, this._validation, true);
        }

        if (typeof this._data !== 'string') {
            this._validation = false;
        }

        return new StringValidator(this._data, this._validation, this._optional);
    }

    isNumber = () => {
        if (this._optional && (this._data === undefined || this._data === null)) {
            return new NumberValidator(this._data, this._validation, true);
        }

        if (typeof this._data !== 'number' || isNaN(this._data)) {
            this._validation = false;
        }

        return new NumberValidator(this._data, this._validation, this._optional);
    }

    isArray = () => {
        if (this._optional && (this._data === undefined || this._data === null)) {
            return new ArrayValidator(this._data, this._validation, true);
        }

        if (!Array.isArray(this._data)) {
            this._validation = false;
        }

        return new ArrayValidator(this._data, this._validation, this._optional);
    }
}

module.exports = TypeValidator;
