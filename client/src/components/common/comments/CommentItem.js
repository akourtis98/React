import React from 'react';
import PropTypes from 'prop-types';

const CommentItem = ({
    name,
    text,
    date
}) => (
        <div class="container">
            <div class="dialogbox">
                <div class="body">
                    <span class="tip tip-up"></span>
                    <div class="message">
                        <h3>{text}</h3>
                    </div>
                    <div><p>posted on: {date} and by: <a href={"/profile/" + name}>{name}</a></p></div>
                </div>
            </div>
        </div>
    )

CommentItem.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired
};

export default CommentItem;