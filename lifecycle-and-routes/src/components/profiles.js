import React from 'react';
import { Link, Redirect } from 'react-router-dom'

const Profile = props => {
    return (
        <div>
            <Link to={{
                pathname: `${props.match.url}/posts`
            }}> take me to /prof/posts </Link>
        </div>
    )
}

export default Profile;