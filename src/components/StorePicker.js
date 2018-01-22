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
				<Header />
				<div className="store-selector">
					<a href="/guitars" className="store-selector__btn" >Visit Store →</a>
				</div>
			</div>
		)
	}
}

export default StorePicker;
