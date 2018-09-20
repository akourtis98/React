import {
    GET_POSTS,
    GET_POST,
    CLEAR_ERRORS,
    LOADING,
    GET_ERRORS
} from './types';

import axios from 'axios';

// Post post
export const submitPost = (post, history) => dispatch => {
    setLoading();
    axios
        .post("http://localhost:5000/routes/index/", post)
        .then(res => history.push('/'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Get all articles
export const getAllposts = () => dispatch => {
    setLoading();
    axios
        .get('http://localhost:5000/routes/index/get')
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
    setLoading();
    axios
        .get(`http://localhost:5000/routes/index/get/${id}`)
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

// Set loading state
export const setLoading = () => {
    return {
        type: LOADING
    };
};

// Clear errors
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};
