class TypeValidator {
    validation = false;
    data;

    constructor(data) {
        data = data;
    }
}

const validator = (data) => {
    const myVlidateData = new TypeValidator(data);

    return myVlidateData;
};

module.exports = validator;
