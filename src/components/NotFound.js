import React from "react";

class NotFound extends React.Component {

	goToStore(event) {
		event.preventDefault();
		window.history.pushState(null, null, 'guitars');
	}

	render() {
		return (
			<div className="store-selector">
				<p>The page you're looking for does not exist!</p>
				<h2>¯\_(ツ)_/¯</h2>
			</div>
		)
	}
}

export default NotFound;
