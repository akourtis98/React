import React from 'react';

const PostItem = props => {
    return (
        <div>
            Post detail: 
            {props.match.params.id} 
        </div>
    )
}

export default PostItem;