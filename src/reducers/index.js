import { combineReducers } from 'redux';
import videos from './VideoReducer';

const rootReducer = combineReducers({
	videos: videos
});

export default rootReducer;