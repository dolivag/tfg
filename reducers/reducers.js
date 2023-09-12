import { combineReducers } from 'redux';
import login from './loginReducer';
import register from './registerReducer';
import user from './userReducer';


export default combineReducers({
    login,
    register,
    user
});