import {
    GET_POSTS,
    GET_POST,
    CLEAR_ERRORS,
    DELETE_POST,
    LOADING,
    GET_ERRORS,
    SEND_MAIL,
    ADD_POST
} from './types';

import axios from 'axios';

// Post post
export const submitPost = (post, history) => dispatch => {
    setLoading();
    axios
        .post("http://localhost:5000/routes/index/", post)
        .then(res => {
            return dispatch({
                type: ADD_POST,
                payload: res.data
            });
        })
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
    setLoading();
    axios
        .post(`http://localhost:5000/routes/index/edit/${id}`, data)
        .then(res => {
            return dispatch({
                type: ADD_POST,
                payload: res.data
            });
        })
        .then(res => history.push('/dashboard'))
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
        .delete(`http://localhost:5000/routes/index/${id}`)
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

export const sendMail = (history, data) => dispatch => {
    setLoading();
    axios
        .post('http://localhost:5000/routes/index/email', data)
        .then(res =>
            dispatch({
                type: SEND_MAIL,
                payload: res.data
            })
        )
        .then(res => history.push('/'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            }))
}

// Post post
export const getSuggestedPosts = handle => dispatch => {
    if (handle === null || handle === "") {
        return dispatch({
            type: GET_POSTS,
            payload: {}
        });
    } else {
        axios
            .get(`http://localhost:5000/routes/index/search/${handle}`)
            .then(res => {
                return dispatch({
                    type: GET_POSTS,
                    payload: res.data
                });
            })
            .catch(err =>
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            );
    }

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
