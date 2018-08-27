import {combineReducers} from 'redux';
import ActiveView from './ActiveView';
import Posts from './Posts';
import StatusInput from './StatusInput';
import ReposServiceCall from './ReposServiceCall';

export default combineReducers({ActiveView, Posts, StatusInput, ReposServiceCall});
