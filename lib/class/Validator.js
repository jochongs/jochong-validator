class Validator {
    _data
    _validation
    _optional

    constructor(data, validation = true, optional = false) {
        this._data = data;
        this._validation = validation;
        this._optional = optional;
    }

    optional = () => {
        this._optional = true;

        return this;
    }

    end = () => {
        return this._validation || false;
    }
}

module.exports = Validator;
