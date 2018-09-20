import {
    GET_POSTS,
    GET_POST,
    LOADING
} from '../actions/types';

const initialState = {
    posts: [],
    post: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            };
        case GET_POST:
            return {
                ...state,
                post: action.payload,
                loading: false
            };
        case LOADING:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
}
