import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postsReducers from './postsReducers';
import errorReducer from './errorReducer';

export default combineReducers({
    auth: authReducer,
    posts: postsReducers,
    errors: errorReducer,
});



