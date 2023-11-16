const REG_EXPS = require('../regExp');
const Validator = require('./Validator');

class StringValidator extends Validator {
    constructor(data, validation) {
        super(data, validation, false);
    }

    length = (min = -Infinity, max = Infinity) => {
        if (!this._validation) return this;

        if (this._data.length < min || this._data.length > max) {
            this._validation = false;
        }

        return this;
    };

    testRegExp = (regExpString) => {
        if (!this._validation) return this;

        const regExp = new RegExp(regExpString);
        this._validation = regExp.test(this._data);

        return this;
    };

    /**
     * @param {Array} inArray
     */
    isIn = (inArray) => {
        if (!this._validation) return this;

        this._validation = inArray.includes(this._data);

        return this;
    }

    isNotEmpty = () => {
        if (!this._validation) return this;

        if (this._data === '') {
            this._validation = false;
        }

        return this;
    }

    isEmail = (regExpString) => {
        if (!this._validation) return this;

        if (!regExpString) {
            this._validation = REG_EXPS.EMAIL.test(this._data)
        } else {
            const regExp = new RegExp(regExpString);
            this._validation = regExp.test(this._data)
        }

        return this;
    }

    isPw = (regExpString) => {
        if (!this._validation) return this;

        if (!regExpString) {
            this._validation = REG_EXPS.PW.test(this._data)
        } else {
            const regExp = new RegExp(regExpString);
            this._validation = regExp.test(this._data)
        }

        return this;
    }

    isName = (regExpString) => {
        if (!this._validation) return this;

        if (!regExpString) {
            this._validation = REG_EXPS.NAME.test(this._data)
        } else {
            const regExp = new RegExp(regExpString);
            this._validation = regExp.test(this._data)
        }

        return this;
    }

    isTime = (regExpString) => {
        if (!this._validation) return this;

        if (!regExpString) {
            this._validation = REG_EXPS.TIME.test(this._data)
        } else {
            const regExp = new RegExp(regExpString);
            this._validation = regExp.test(this._data)
        }

        return this;
    }

    isDatetime = (regExpString) => {
        if (!this._validation) return this;

        if (!regExpString) {
            this._validation = REG_EXPS.DATETIME.test(this._data)
        } else {
            const regExp = new RegExp(regExpString);
            this._validation = regExp.test(this._data)
        }

        return this;
    }

    isDate = (regExpString) => {
        if (!this._validation) return this;

        if (!regExpString) {
            this._validation = REG_EXPS.DATE.test(this._data)
        } else {
            const regExp = new RegExp(regExpString);
            this._validation = regExp.test(this._data)
        }

        return this;
    }

    isOnlyNumber = (regExpString) => {
        if (!this._validation) return this;

        if (!regExpString) {
            this._validation = REG_EXPS.NUMBER.test(this._data)
        } else {
            const regExp = new RegExp(regExpString);
            this._validation = regExp.test(this._data)
        }

        return this;
    }

    isOnlyAlpabet = (regExpString) => {
        if (!this._validation) return this;

        if (!regExpString) {
            this._validation = REG_EXPS.ALPABET.test(this._data)
        } else {
            const regExp = new RegExp(regExpString);
            this._validation = regExp.test(this._data)
        }

        return this;
    }

    isId = (regExpString) => {
        if (!this._validation) return this;

        if (!regExpString) {
            this._validation = REG_EXPS.ID.test(this._data)
        } else {
            const regExp = new RegExp(regExpString);
            this._validation = regExp.test(this._data)
        }

        return this;
    }
}

module.exports = StringValidator;
