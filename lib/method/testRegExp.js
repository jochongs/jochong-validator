const testRegExp = (regExpString) => {
    if (!this.validation) return this;

    const regExp = new RegExp(regExpString);
    this.validation = regExp.test(this.data);

    return this;
}

module.exports = testRegExp;
