import React, { Component } from 'react';
import Header from './components/Header';
import Order from './components/Order';
import Inventory from './components/Inventory';
import Guitar from "./components/Guitar";
import guitars from "./data/guitars";

class App extends Component {

	constructor() {
		super();
		this.addGuitar = this.addGuitar.bind(this);
		this.loadSamples = this.loadSamples.bind(this);
		// getInitialState
		this.state = {
			guitars: {},
			order: {}
		};
	}

	loadSamples() {
		this.setState({
			guitars
		});
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
			<div className="App wrapper">
				<div className="row">
					<Header />
					<div className="guitar-selection column-8">
						<h2>Items</h2>
						<ul className="guitars-list">
							{
								Object.keys(this.state.guitars).map(key => <Guitar key={key} details={this.state.guitars[key]} />)
							}
						</ul>
					</div>
					<div className="column-4">
						<Order />
					</div>
				</div>
				<div className="row">
					<div className="column-12">
						<Inventory addGuitar={this.addGuitar} loadSamples={this.loadSamples} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
