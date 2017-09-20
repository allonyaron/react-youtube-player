export function getYoutubeVideos(nextPageToken) {
	return {type: 'GET_YOUTUBE_VIDEOS', nextPageToken: nextPageToken};
}
