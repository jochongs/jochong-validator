const TypeValidator = require("./class/TypeValidator");

const validator = (data) => {
    const myVlidateData = new TypeValidator(data);

    return myVlidateData;
};

module.exports = validator;
