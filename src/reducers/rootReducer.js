import { combineReducers } from 'redux';
import contentListReducer from './contentListReducer';

const rootReducer = combineReducers({
    contentList: contentListReducer
});

export default rootReducer;