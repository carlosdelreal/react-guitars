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
				<Header tagline="Acoustic &amp; Electric Guitars" />
				<div className="store-selector">
					<a href="/store/" className="btn" >Visit Store →</a>
				</div>
			</div>
		)
	}
}

export default StorePicker;
