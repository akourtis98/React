const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validatePostInput(data) {
    let errors = {};

    Object.keys(data).map(key => {
        data[key] = !isEmpty(data[key]) ? data[key] : '';
    });

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