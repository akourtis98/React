const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validatePostInput(data) {
    let errors = {};

    Object.keys(data).map(key => {
        data[key] = !isEmpty(data[key]) ? data[key] : '';
    });

    if (!validator.isLength(data.body, { min: 1, max: 600 })) {
        errors.body = 'Post must be between 1 and 600 characters';
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