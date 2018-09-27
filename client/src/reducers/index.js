import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postsReducers from './postsReducers';
import errorReducer from './errorReducer';
import mailReducer from './mailReducer';
import profileReducer from './profileReducer';

export default combineReducers({
    auth: authReducer,
    posts: postsReducers,
    errors: errorReducer,
    mail: mailReducer,
    profile: profileReducer
});



