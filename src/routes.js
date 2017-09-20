import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import VideoPage from './components/video/VideoPage';

export default (
	<Route path="/" component={App} >
		<IndexRoute component={HomePage} />
		<Route path="video" component={VideoPage} />
	</Route>
);