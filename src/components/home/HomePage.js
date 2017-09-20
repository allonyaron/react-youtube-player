import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
	render() {
		return (
			<div>
				<h1>VideoList</h1>
				<Link to="video">videoLink</Link>
			</div>

		);
	}
}

export default HomePage;