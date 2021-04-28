import sneakerReducer from "./sneakerReducer";
import userReducer from './userReducer';
import basketReducer from './basketReducers';
import { combineReducers } from 'redux';

export default combineReducers({
    sneakers: sneakerReducer,
    user: userReducer,
    basket: basketReducer
});