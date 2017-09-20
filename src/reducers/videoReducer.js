export default function videoReducer(state = [], action) {
	switch(action.type) {
		case 'GET_YOUTUBE_VIDEOS':
			return [...state,
				Object.assign({}, action.nextPageToken)
				];
		default:
		return state;
	}
}