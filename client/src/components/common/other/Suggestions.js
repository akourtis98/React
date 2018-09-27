import React from 'react';

const Suggestions = ({
    users
}) => (
        <div className="suggestionsdiv">
            {
                users.map(el => (
                    <div key={el._id}>
                        <a href={"/profile/" + el.username}>{el.username}</a>
                    </div>
                ))
            }
        </div>
    )

export default Suggestions;