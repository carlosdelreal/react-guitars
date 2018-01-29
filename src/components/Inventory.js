import React from "react";
import AddGuitarForm  from "./AddGuitarForm";
import PropTypes from "prop-types";

class Inventory extends React.Component {

	constructor() {
		super();
		this.renderInventory = this.renderInventory.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e, key) {
		const guitar = this.props.guitars[key];
		// take a copy of that guitar and update it with the new data
		const updatedGuitar = {
			...guitar,
			[e.target.name]: e.target.value
		};
		this.props.updateGuitar(key, updatedGuitar);
		console.log(updatedGuitar);
	}

	renderInventory(key) {
		// console.log(this);
		const guitar = this.props.guitars[key];
		return (
			<div className="guitar-edit" key={key}>
				<input type="text" name="name" value={guitar.name} placeholder="Guitar name" onChange={(e) => this.handleChange(e, key)} />
				<input type="text" name="price" value={guitar.price} placeholder="Guitar price" onChange={(e) => this.handleChange(e, key)} />
				<select type="text" name="status" value={guitar.status} placeholder="Guitar status" onChange={(e) => this.handleChange(e, key)} >
					<option value="available">In stock</option>
					<option value="unavailable">Sold!</option>
				</select>
				<textarea type="text" name="desc" value={guitar.desc} placeholder="Guitar desc" onChange={(e) => this.handleChange(e, key)}></textarea>
				<input type="text" name="image" value={guitar.image} placeholder="Guitar image" onChange={(e) => this.handleChange(e, key)} />
				<button onClick={() => this.props.removeGuitar(key)} className="btn">Remove Item <span className="btn--remove-item">&times;</span></button>
			</div>
		);
	}

	render() {
		return (
			<div className="inventory">
				<h2>Inventory</h2>
				<div className="inventory__items">
					<p><em>This component would be an admin panel to create, remove, update and delete items.</em></p>
					{Object.keys(this.props.guitars).map(this.renderInventory)}
					<AddGuitarForm addGuitar={this.props.addGuitar} />
					<div className="row store-selector">
						<button onClick={this.props.loadSamples} className="btn">Load Guitars</button>
					</div>
				</div>
			</div>
		)
	}
}

Inventory.propTypes = {
	guitars: PropTypes.object.isRequired,
	updateGuitar: PropTypes.func.isRequired,
	removeGuitar: PropTypes.func.isRequired,
	addGuitar: PropTypes.func.isRequired,
	loadSamples: PropTypes.func.isRequired
}

export default Inventory;
