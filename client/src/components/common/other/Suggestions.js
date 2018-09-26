import React from 'react';

const Suggestions = ({
    posts
}) => (
        <div className="suggestionsdiv">
            {
                posts.map(el => (
                    <div key={el._id}>
                        <a href={"/post/" + el._id}>{el.title}</a>
                    </div>
                ))
            }
        </div>
    )

export default Suggestions;