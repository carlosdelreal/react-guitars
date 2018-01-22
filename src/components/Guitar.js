import React from "react";
import { formatPrice } from "../helpers";

class Guitar extends React.Component {
    render() {
        const { details } = this.props;
        return (
            <li className="guitar">
                <img src={`/images/guitar-${details.id}.jpg`} alt={this.props.details.name}/>
                <h3 className="guitar__name">
                    {details.name}
                </h3>
                <span className="guitar__price">
                    {formatPrice(details.price)}
                </span>
                <p>{details.description}</p>
                <button className="btn">Add To Order</button>
            </li>
        )
    }
}

export default Guitar;
