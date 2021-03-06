import {
    GET_POSTS,
    GET_POST,
    DELETE_POST,
    LOADING,
    GET_ERRORS,
    CLEAR_ERRORS,
    ADD_POST
} from './types';

import axios from 'axios';

// Post post
export const submitPost = (post, history) => dispatch => {
    dispatch(setLoading())
    axios
        .post("http://localhost:5000/routes/posts/new/post", post)
        .then(res => dispatch({
            type: ADD_POST,
            payload: res.data
        })
        )
        .then(res => history.push('/'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Add Post
export const editPost = (history, id, data) => dispatch => {
    dispatch(setLoading())
    axios
        .post(`http://localhost:5000/routes/posts/edit/${id}`, data)
        .then(res => dispatch({
            type: ADD_POST,
            payload: res.data
        })
        )
        .then(res => history.push('/dashboard'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};


// Add Comment
export const addComment = (postId, commentData) => dispatch => {
    dispatch(clearErrors());
    axios
        .post(`http://localhost:5000/routes/posts/add/comment/${postId}`, commentData)
        .then(res =>
            dispatch({
                type: GET_POST,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Delete Comment
export const deleteComment = (postId, commentId) => dispatch => {
    axios
        .delete(`http://localhost:5000/routes/posts/comment/${postId}/${commentId}`)
        .then(res =>
            dispatch({
                type: GET_POST,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};


// Add Like
export const addLike = id => dispatch => {
    axios
        .post(`http://localhost:5000/routes/posts/like/${id}`)
        .then(res => dispatch(getAllposts()))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Remove Like
export const removeLike = id => dispatch => {
    axios
        .post(`http://localhost:5000/routes/posts/unlike/${id}`)
        .then(res => dispatch(getAllposts()))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Delete Post
export const deletePost = id => dispatch => {
    setLoading();
    axios
        .delete(`http://localhost:5000/routes/posts/delete/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_POST,
                payload: res.data
            })
            dispatch(getAllposts());
        }
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Get all articles
export const getAllposts = () => dispatch => {
    dispatch(setLoading())
    axios
        .get('http://localhost:5000/routes/posts/get/posts')
        .then(res =>
            dispatch({
                type: GET_POSTS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Get all articles
export const getAllpostsOfUser = () => dispatch => {
    dispatch(setLoading())
    axios
        .get(`http://localhost:5000/routes/posts/get/userposts/`)
        .then(res =>
            dispatch({
                type: GET_POSTS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Get article
export const getPost = id => dispatch => {
    dispatch(setLoading())
    axios
        .get(`http://localhost:5000/routes/posts/get/post/${id}`)
        .then(res =>
            dispatch({
                type: GET_POST,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Clear errors
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};

// Set loading state
export const setLoading = () => {
    return {
        type: LOADING
    };
};