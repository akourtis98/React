import { combineReducers } from 'redux';
import userReducer from './userReducer';
import postsReducers from './postsReducers';
import errorReducer from './errorReducer';
import mailReducer from './mailReducer';
import profileReducer from './profileReducer';

export default combineReducers({
    auth: userReducer,
    posts: postsReducers,
    errors: errorReducer,
    mail: mailReducer,
    profile: profileReducer
});



