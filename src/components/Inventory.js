import React from "react";
import AddGuitarForm  from "./AddGuitarForm";

class Inventory extends React.Component {
	render() {
		return (
			<div>
				<h2>Inventory</h2>
				<AddGuitarForm addGuitar={this.props.addGuitar} />
				<button onClick={this.props.loadSamples} className="btn">Load Guitars</button>
			</div>
		)
	}
}

export default Inventory;
