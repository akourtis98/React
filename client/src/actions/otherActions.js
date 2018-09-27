import {
    GET_POSTS,
    LOADING,
    GET_ERRORS,
    SEND_MAIL,
} from './types';

import axios from 'axios';

export const sendMail = (history, data) => dispatch => {
    setLoading();
    axios
        .post('http://localhost:5000/routes/other/email/', data)
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
    setLoading();
    if (handle === null || handle === "") {
        return dispatch({
            type: GET_POSTS,
            payload: {}
        });
    } else {
        axios
            .get(`http://localhost:5000/routes/other/search/${handle}`)
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