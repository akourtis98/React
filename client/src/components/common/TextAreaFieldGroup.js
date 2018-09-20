import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextAreaFieldGroup = ({
    name,
    placeholder,
    label,
    error,
    info,
    rows,
    onChange
}) => {
    return (
        <div className="form-group">
            <label htmlFor="exampleInputEmail"><h4>{label}</h4></label>
            <textarea
                name={name}
                rows={rows}
                className={classnames('form-control form-control-lg', {
                    'is-invalid': error
                })}
                onChange={onChange}
                placeholder={placeholder} />
            <small className="form-text text-muted">{info}</small>
            <div className="invalid-feedback"><h5>{error}</h5></div>
        </div>
    );
};

TextAreaFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    rows: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string,
    error: PropTypes.string,
    info: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default TextAreaFieldGroup;