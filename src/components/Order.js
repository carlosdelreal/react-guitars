import React from "react";
import { formatPrice } from "../helpers";
import { CSSTransitionGroup } from 'react-transition-group';

class Order extends React.Component {

	constructor() {
		super();
		this.renderOrder = this.renderOrder.bind(this);
	}

	renderOrder(key) {
		const guitar = this.props.guitars[key];
		const count = this.props.order[key];
		const removeBtn = <button className="btn--remove-item" onClick={() => this.props.removeFromOrder(key)}>&times;</button>;

		if (!guitar || guitar.status === 'unavailable') {
			return (
				<li key={key}>Sorry, {guitar ? guitar.name : 'this guitar'} is no longer available {removeBtn} </li>
			)
		}

		return (
			<li key={key}>
				<span>
					<CSSTransitionGroup
						component="span"
						className="count"
						transitionName="count"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={500}
					>
						<span key={count}> {count} </span>
					</CSSTransitionGroup>
					<span className="test">{guitar.name} {removeBtn}</span>
				</span>
				{/* <span className="price">{formatPrice(count * guitar.price)}</span> */}
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
			<div className="">
				<h2 className="order__total">Total: {formatPrice(total)}</h2>
				<CSSTransitionGroup
					className="order"
					component="ul"
					transitionName="order"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}
				>
					{orderIds.map(this.renderOrder)}
				</CSSTransitionGroup>
			</div>
		)
	}
}

export default Order;
