const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateLoginInput(data) {
    let errors = {};

    Object.keys(data).map(key => {
        data[key] = !isEmpty(data[key]) ? data[key] : '';
    });

    if (!validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }
    if (validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }
    if (validator.isLength(data.password, { min: 6, max: 120 })) {
        errors.password = 'Password must be atleast 6 characters and max 30';
    }
    if (validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}