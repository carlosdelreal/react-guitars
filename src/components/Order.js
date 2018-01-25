import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {

	constructor() {
		super();
		this.renderOrder = this.renderOrder.bind(this);
	}

	renderOrder(key) {
		const guitar = this.props.guitars[key];
		const count = this.props.order[key];

		if (!guitar || guitar.status === 'unavailable') {
			return <li key={key}>Sorry, {guitar ? guitar.name : 'this guitar'} is no longer available</li>
		}

		return (
			<li key={key}>
				<span>{count} {guitar.name} </span>
				<span className="price">{formatPrice(count * guitar.price)}</span>
			</li>
		)
	}

	render() {
		const orderIds = Object.keys(this.props.order);
		const total = orderIds.reduce((prevTotal, key) => {
			const guitar = this.props.guitars[key];
			const count = this.props.order[key];
			const isAvailable = guitar && guitar.status === 'available';
			if (isAvailable) {
				return prevTotal + (count * guitar.price || 0);
			}
			return prevTotal;
		}, 0);
		return (
			<div className="order">
				<h2>Your Order</h2>
				<ul className="order__list">
					{orderIds.map(this.renderOrder)}
					<li className="order__total">
						<span>Total: </span>{formatPrice(total)}
					</li>
				</ul>
			</div>
		)
	}
}

export default Order;
