import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SelectListGroup = ({
    name,
    error,
    label,
    info,
    onChange,
    options
}) => {
    const selectOptions = options.map(option => (
        <option key={option.label} value={option.value} >
            {option.label}
        </option>
    ));
    return (
        <div className="form-group">
            <label htmlFor="exampleInputEmail">{label}</label>
            <select
                name={name}
                className={classnames('form-control form-control-lg', {
                    'is-invalid': error
                })}
                onChange={onChange}>
                {selectOptions}
            </select>
            <small className="form-text text-muted">{info}</small>
            <div className="invalid-feedback">error: {error} </div>
        </div>
    );
};

SelectListGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    error: PropTypes.string,
    info: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default SelectListGroup;