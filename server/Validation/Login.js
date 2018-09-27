const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateLoginInput(data) {
    let errors = {};

    if (!validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }
    if (validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }
    if (validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}