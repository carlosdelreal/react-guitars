import React from "react";

class AddGuitarForm extends React.Component {

	createGuitar(event) {
		event.preventDefault();
		const guitar = {
			name: this.name.value,
			price: this.price.value,
			status: this.status.value,
			desc: this.desc.value,
			image: this.image.value
		};
		console.log(guitar);
		this.props.addGuitar(guitar);
		this.guitarForm.reset();
	}

	render() {
		return (
			<form ref={(input) => this.guitarForm = input } className="guitar-edit" onSubmit={(e) => this.createGuitar(e)}>
				<input ref={(input) => this.name = input } type="text" placeholder="Guitar Name"/>
				<input ref={(input) => this.price = input } type="text" placeholder="Guitar Price"/>
				<select ref={(input) => this.status = input }>
					<option value="available">In stock</option>
					<option value="unavailable">Sold out!</option>
				</select>
				<textarea ref={(input) => this.desc = input } type="text" placeholder="Guitar Description"></textarea>
				<input ref={(input) => this.image = input } type="text" placeholder="Guitar Image"/>
				<button type="submit" className="btn">Add Item +</button>
			</form>
		)
	}
}

export default AddGuitarForm;
