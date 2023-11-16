class Validator {
    /**
     * @private
     */
    _data

    /**
     * @private
     */
    _validation

    /**
     * @private
     */
    _optional

    constructor(data, validation = true, optional = false) {
        this._data = data;
        this._validation = validation;
        this._optional = optional;
    }

    end = () => {
        return this._validation || false;
    }
}

module.exports = Validator;
