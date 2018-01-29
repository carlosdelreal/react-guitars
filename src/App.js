import React, { Component } from 'react';
import Header from './components/Header';
import Order from './components/Order';
import Inventory from './components/Inventory';
import Guitar from "./components/Guitar";
import guitars from "./data/guitars";
import PropTypes from "prop-types";

class App extends Component {

	constructor() {
		super();
		this.addGuitar = this.addGuitar.bind(this);
		this.updateGuitar = this.updateGuitar.bind(this);
		this.removeGuitar = this.removeGuitar.bind(this);
		this.loadSamples = this.loadSamples.bind(this);
		this.addToOrder = this.addToOrder.bind(this);
		this.removeFromOrder = this.removeFromOrder.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);

		// getInitialState() in old react
		this.state = {
			guitars: {},
			order: {}
		};
	}

	componentWillMount() {
		// this runs right before <App /> is rendered
		this.loadSamples();

		// check if there is any order in localStorage
		const localStorageRef = localStorage.getItem(`order-${this.props.match.url}`);

		if (localStorageRef) {
			// update App component's order state
			this.setState({
				order: JSON.parse(localStorageRef)
			});
		}
	}

	componentWillUpdate(nextProps, nextState) {
		localStorage.setItem(`order-${this.props.match.url}`, JSON.stringify(nextState.order));
	}

	loadSamples() {
		this.setState({ guitars });
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

	updateGuitar(key, updatedGuitar) {
		// take a copy of all of the guitars
		const guitars = {...this.state.guitars};
		// overwrite the updatedGuitar
		guitars[key] = updatedGuitar;
		// setState of the App
		this.setState({ guitars });
	}

	removeGuitar(key) {
		// take a copy of our guitars
		const guitars = { ...this.state.guitars };
		// guitars[key] = null;
		// this.setState({ guitars });
		delete guitars[key];
		this.setState({ guitars });
		console.log(guitars);
	}

	addToOrder(key) {
		// take a copy of our state
		const order = { ...this.state.order };
		// update or add the new number of guitars ordered
		order[key] = order[key] + 1 || 1;
		// update our state
		this.setState({
			order
		});
	}

	removeFromOrder(key) {
		const order = {...this.state.order};
		delete order[key];
		this.setState({ order });
	}

	openModal() {
		this.modal.classList.add('modal--is-visible');
	}

	closeModal() {
		this.modal.classList.remove('modal--is-visible');
	}

	render() {
		return (
			<div className="app wrapper" onLoad={this.loadSamples}>
				<div className="row">

					<button onClick={this.openModal} className="btn--open-modal"><span role="img" aria-label="Guitar">🎸</span></button>

					<Header tagline="Acoustic &amp; Electric Guitars" />
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
						<Order
							guitars={ this.state.guitars }
							order={ this.state.order }
							params = { this.props.match.url }
							removeFromOrder={ this.removeFromOrder }
						/>
					</div>
				</div>

				<div className="modal" ref={modal => this.modal = modal}>

					<button onClick={this.closeModal} className="btn--close-modal">&times;</button>

					<Inventory
						addGuitar={this.addGuitar}
						loadSamples={this.loadSamples}
						guitars={this.state.guitars}
						updateGuitar={this.updateGuitar}
						removeGuitar={this.removeGuitar}
					/>
				</div>
			</div>
		);
	}
}

App.propTypes = {
	params: PropTypes.object
}

export default App;
