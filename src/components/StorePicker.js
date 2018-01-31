import React from "react";
import { getFunName } from "../helpers";
import PropTypes from "prop-types";

class StorePicker extends React.Component {

	goToStore(event) {
		event.preventDefault();
		const storeId = this.storeInput.value;
		console.log(`Going to ${storeId}`);
		this.props.history.push(`store/${storeId}`);
	}

	render() {
		return (
			<div>
				{/* <div className="store-selector">
					<a href="/store/" className="btn" >Visit Store →</a>
				</div> */}
				<form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
					<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
					<button className="btn" type="submit">Visit Store →</button>
				</form>
			</div>
		)
	}
}

StorePicker.contextTypes = {
	router: PropTypes.object
}

export default StorePicker;
