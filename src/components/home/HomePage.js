import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
// import * as courseActions from '../../actions/courseActions';


class HomePage extends React.Component {

	renderVideoList() {
		return this.props.videos.map((video, index) => {
			return (
				<li key={index}>{video.snippet.title}</li>
			);
		});
	}


	render() {
		return (
			<div>
				<h1>VideoList</h1>
				<ul>
					{this.renderVideoList()}
				</ul>
			</div>
		);
	}
}

HomePage.propTypes = {
	videos: PropTypes.array.isRequired
};

function mapStateToProps (state, ownProps) {
	return {
		videos: state.videos
	};
}

export default connect(mapStateToProps)(HomePage);