import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextAreaFieldGroup = ({
    name,
    placeholder,
    label,
    error,
    info,
    cols,
    rows,
    onChange
}) => {
    return (
        <div className="form-group">
            <label htmlFor="exampleInputEmail"><h4>{label}</h4></label>
            <textarea
                name={name}
                cols={cols}
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
    name: PropTypes.string,
    rows: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    cols: PropTypes.number,
    error: PropTypes.string,
    info: PropTypes.string,
    onChange: PropTypes.func,
}

export default TextAreaFieldGroup;