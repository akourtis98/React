import React from 'react';
import PropTypes from 'prop-types';

const WholeArticle = ({
    title,
    body
}) => {
    return (
        <div className="card mb-4" >
            <a href="/">
                <button className="btn btn-light">
                    Click here to go back
                </button>
            </a>
            <img className="card-img-top" src="http://placehold.it/350x200" alt="Card cap" />
            <div className="card-body">
                <h2 className="card-title">{title} </h2>
                <p>{body}</p>
            </div>
        </div>
    )
}

WholeArticle.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string
}

export default WholeArticle;

