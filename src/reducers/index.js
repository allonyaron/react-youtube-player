import { combineReducers } from 'redux';
import videos from './videoReducer';

const rootReducer = combineReducers({
	videos: videos
});

export default rootReducer;