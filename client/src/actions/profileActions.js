import axios from "axios";

import {
    GET_PROFILE,
    LOADING,
    GET_ERRORS,
    SET_CURRENT_USER
} from "./types";

// Get profile by handle
export const getProfileById = id => dispatch => {
    setLoading();
    axios
        .get(`http://localhost:5000/routes/profile/get/profile/${id}`)
        .then(res => {
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Get current profile
export const getCurrentProfile = () => dispatch => {
    setLoading();
    axios
        .get("http://localhost:5000/routes/profile/get/current")
        .then(res => {
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch({
                type: GET_PROFILE,
                payload: {}
            })
        );
};

// Create Profile
export const createProfile = (data, history) => dispatch => {
    setLoading();
    axios
        .post("http://localhost:5000/routes/profile/new/profile", data)
        .then(res => history.push("/home"))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Delete account & profile
export const deleteAccount = () => dispatch => {
    if (window.confirm("Are you sure? This can NOT be undone!")) {
        axios
            .delete("http://localhost:5000/routes/profile/delete/profile")
            .then(res =>
                dispatch({
                    type: SET_CURRENT_USER,
                    payload: {}
                })
            )
            .catch(err =>
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            );
    }
};

// Profile loading
export const setLoading = () => dispatch => {
    dispatch({
        type: LOADING
    });
};