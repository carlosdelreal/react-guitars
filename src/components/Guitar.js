import React from "react";
import { formatPrice } from "../helpers";

class Guitar extends React.Component {
    render() {
        const { details } = this.props;
        return (
            <li className="guitar">
                <div className="wrapper">
                    <row>
                        <div className="column-4">
                            <div className="guitar__img">
                                <img src={`/images/guitar-${details.id}.jpg`} alt={this.props.details.name} />
                            </div>

                            <button className="btn">Add To Order</button>
                        </div>
                        <div className="column-8">
                            <h3 className="guitar__name">
                                {details.name}
                            </h3>
                            <span className="guitar__price">
                                {formatPrice(details.price)}
                            </span>
                            <p>{details.description}</p>
                        </div>
                    </row>
                </div>
            </li>
        )
    }
}

export default Guitar;
