class Validator {
    _data
    _validation
    _optional

    constructor(data, validation, optional = false) {
        this._data = data;
        this._validation = validation;
        this._optional = optional;
    }

    end = () => {
        return this._validation || false;
    }
}

module.exports = Validator;
