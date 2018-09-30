const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validatePostInput(data) {
    let errors = {};

    if (!validator.isLength(data.text, { min: 1, max: 600 })) {
        errors.text = 'Post must be between 1 and 600 characters';
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