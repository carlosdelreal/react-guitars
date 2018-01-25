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
		this.addToOrder = this.addToOrder.bind(this);

		// getInitialState() in old react
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

	componentDidMount() {
		this.loadSamples();
	}

	addToOrder(key) {
		// take a copy of our state
		const order = {...this.state.order};
		// update or add the new number of guitars ordered
		order[key] = order[key] + 1 || 1;
		// update our state
		this.setState({ order });
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
			<div className="app wrapper" onLoad={this.loadSamples}>
				<div className="row">
					<Header tagline="Vintage &amp; Rare Guitars" />
					<div className="column-8">
						<div className="products">
							<ul className="guitars-list">
								{
									Object.keys(this.state.guitars).map(key => <Guitar key={key} index={key} details={this.state.guitars[key]} addToOrder={this.addToOrder} />)
								}
							</ul>
						</div>
					</div>
					<div className="column-4">
						<Order guitars={this.state.guitars} order={this.state.order} />
						{/* <Inventory addGuitar={this.addGuitar} loadSamples={this.loadSamples} /> */}
					</div>
				</div>
				<div className="row">
					<div className="column-12">

					</div>
				</div>
			</div>
		);
	}
}

export default App;
