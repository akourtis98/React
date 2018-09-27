const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    if (!validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    Object.keys(data).map(key => {
        if (!data[key]) {
            errors[key] = key + " field is required";
        }
    });

    return {
        errors,
        isValid: isEmpty(errors)
    };
}