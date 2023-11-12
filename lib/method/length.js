const length = (min = -Infinity, max = Infinity) => {
    if (!this.validation) {
        return this;
    }

    if (this.data.length < min || this.data.length > max) {
        this.validation = false;
    }

    return this;
}

module.exports = length;
