import React from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';

const PostsFeed = ({
    posts
}) => (
        posts.map(post => <PostItem key={post._id} post={post} />)
    )

PostsFeed.propTypes = {
    posts: PropTypes.array.isRequired
};

export default PostsFeed;
