/**
 * @author rc-chandan
 * 
 * The main reducer is created using combineReducer function
 * Currently it has only one key todoReducer, but you can
 * add any number of reducer you need.
 */


import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

export default combineReducers({
    todoReducer,
});