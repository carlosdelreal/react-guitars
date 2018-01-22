import React, { Component } from 'react';
import Header from './components/Header';
import Order from './components/Order';
import Inventory from './components/Inventory';

class App extends Component {

	constructor() {
		super();
		// getInitialState
		this.state = {
			guitars: {},
			order: {}
		};
	}
	render() {
		return (
			<div className="App">
				<Header tagline="Welcome!"/>
				<div className="guitar-selection">
					((((guitars will go here...))))
				</div>
				<Order />
				<Inventory />
			</div>
		);
	}
}

export default App;
