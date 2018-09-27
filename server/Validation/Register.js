const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    // Object.keys(data).map(key => {
    //     data[key] = !isEmpty(data[key]) ? data[key] : '';
    // });

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