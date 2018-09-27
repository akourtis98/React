const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateProfileInput(data) {
    let errors = {};

    Object.keys(data).map(key => {
        data[key] = !isEmpty(data[key]) ? data[key] : '';
    });

    Object.keys(data).map(key => {
        if ((key != 'status') && (key != 'bio')) {
            if (!validator.isLength(data[key], { min: 2, max: 50 })) {
                errors[key] = key + " needs to between 2 and 50 characters";
            }
        } else if (key === 'bio') {
            if (!validator.isLength(data[key], { min: 5, max: 400 })) {
                errors[key] = key + " needs to between 5 and 400 characters";
            }
        }
    });

    Object.keys(data).map(key => {
        if (validator.isEmpty(data[key])) {
            errors[key] = key + " field is required";
        }
    });

    return {
        errors,
        isValid: isEmpty(errors)
    };
}