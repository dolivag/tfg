import { combineReducers } from 'redux';
import login from './loginReducer';
import register from './registerReducer';


export default combineReducers({
    login,
    register
});