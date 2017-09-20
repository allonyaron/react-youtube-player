export default function videoReducer(state = [], action) {
	switch(action.type) {
		case 'GET_YOUTUBE_VIDEOS':
			// return [...state,
			// 	Object.assign({}, action.nextPageToken)
			// 	];
			return [
				{ title: 'Video1'},
				{ title: 'Video2'},
				{ title: 'Video3'}
			];
		default:
		// return state;
		return [
				{ title: 'Video1'},
				{ title: 'Video2'},
				{ title: 'Video3'}
			];
	}
}