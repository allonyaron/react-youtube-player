import axios from 'axios';

export function loadVideosSuccess(videos) {
	return {type: 'LOAD_VIDEOS_SUCCESS', videos};
}

export function getYoutubeVideos() {
	return function(dispatch) {
		return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=AIzaSyAb7EHP4pa1t-eJE5FjquCGmiZx0Y3x82Y&maxResults=11`)
				.then((response) => {
						console.log('videoData - ' + response.data);
						dispatch(loadVideosSuccess(response.data.items));
				})
				.catch(error => {
					throw (error);
				});
	};
}
