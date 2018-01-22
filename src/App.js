import React, { Component } from 'react';
import Header from './components/Header';
import Order from './components/Order';
import Inventory from './components/Inventory';

class App extends Component {

	constructor() {
		super();
		this.addGuitar = this.addGuitar.bind(this);
		// getInitialState
		this.state = {
			guitars: {},
			order: {}
		};
	}

	addGuitar(guitar) {
		// get a copy of your current state
		const guitars = {...this.state.guitars};
		// add in our new guitar
		const timestamp = Date.now();
		guitars[`guitar-${timestamp}`] = guitar;
		// set state
		this.setState({ guitars });
	}

	render() {
		return (
			<div className="App">
				<Header tagline="Welcome!"/>
				<div className="guitar-selection">
					((((guitars will go here...))))
				</div>
				<Order />
				<Inventory addGuitar={this.addGuitar} />
			</div>
		);
	}
}

export default App;
