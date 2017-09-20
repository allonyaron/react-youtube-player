export default function videoReducer(state = [], action) {
	switch(action.type) {
		case 'LOAD_VIDEOS_SUCCESS':
			console.log(action.videos);
			return action.videos;

		default:
			return state;
	}
}