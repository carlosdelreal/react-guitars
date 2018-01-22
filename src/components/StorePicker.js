import React from "react";
import Header from "./Header";

class StorePicker extends React.Component {

	goToStore(event) {
		event.preventDefault();
		window.history.pushState(null, null, 'guitars');
	}

	render() {
		return (
			<div>
				<Header tagline="New and Vintage Guitars" />
				<div className="store-selector">
					<a href="/guitars" className="btn" >Visit Store →</a>
				</div>
			</div>
		)
	}
}

export default StorePicker;
