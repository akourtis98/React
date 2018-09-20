import React from 'react';
import PropTypes from 'prop-types';

const Article = ({
    title,
    id,
}) => {
    return (
        <div className="card mb-4" >
            <img className="card-img-top" src="http://placehold.it/350x200" alt="Card cap" />
            <div className="card-body">
                <h2 className="card-title"><i>{title}</i></h2>
                <a href={"/post/" + id} className="btn btn-primary">Read More &rarr;</a>
            </div>
        </div>
    )
}

Article.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number,
}

export default Article;

