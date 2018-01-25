import React from "react";
import Header from "./Header";

class NotFound extends React.Component {

	goToStore(event) {
		event.preventDefault();
		window.history.pushState(null, null, 'guitars');
	}

	render() {
		return (
			<div>
				<Header tagline="Vintage &amp; Rare Guitars" />
				<div className="store-selector">
					<p>The page you're looking for does not exist!</p>
					<h2>¯\_(ツ)_/¯</h2>
				</div>
			</div>
		)
	}
}

export default NotFound;
