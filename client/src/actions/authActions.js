import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

// Types
import {
    GET_ERRORS,
    SET_CURRENT_USER,
    LOADING,
    CLEAR_ERRORS,
    CLEAR_CURRENT_USER
} from "./types";

// Register user
export const registerUser = (userData, history) => dispatch => {
    axios
        .post("http://localhost:5000/routes/auth/register", userData)
        .then(res => history.push("/login"))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Login - Get User Token
export const loginUser = (userData, history) => dispatch => {
    axios
        .post("http://localhost:5000/routes/auth/login", userData)
        .then(res => {
            // Save to localStorage
            let { token } = res.data;

            // Set token to ls
            localStorage.setItem("jwttoken", token);
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            // Set current user
            dispatch(setUser(decoded));
        })
        .then(res => history.push('/'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Set logged in user
export const setUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

// Log out logged in user
export const logoutUser = () => dispatch => {
    // Remove item from localStorage
    localStorage.removeItem("jwttoken");

    // Remove Auth header
    setAuthToken(false);

    // Set current user to empty object which will set isAuthenicated to false
    dispatch(setUser({}));
};

// Profile loading
export const setLoading = () => dispatch => {
    dispatch({
        type: LOADING
    });
};

// Clear profile
export const clearCurrentUser = () => {
    return {
        type: CLEAR_CURRENT_USER
    };
};

// Clear errors
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};
