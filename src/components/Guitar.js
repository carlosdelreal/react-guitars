import React from "react";
import { formatPrice } from "../helpers";
import PropTypes from "prop-types";

const repo = `/${window.location.pathname.split('/')[1]}`;
class Guitar extends React.Component {
    render() {
        const { details, index } = this.props;
        const isAvailable = details.status === 'available';
        const buttonText = isAvailable ? 'Add To Order' : 'Sold!';
        return (
            <li className="guitar">
                <div className="wrapper">
                    <div className="row">
                        <div className="column-4">
                            <div className="guitar__img">
                                <img src={details.image} alt={this.props.details.name} />
                            </div>
                            <button onClick={() => this.props.addToOrder(index)} disabled={!isAvailable} className="btn">{buttonText}</button>
                        </div>
                        <div className="column-8">
                            <h3 className="guitar__name">
                                {details.name}
                            </h3>
                            <p className="guitar__price">
                                {formatPrice(details.price)}
                            </p>
                            <p>{details.desc}</p>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

Guitar.propTypes = {
    details: PropTypes.object.isRequired,
    index: PropTypes.string.isRequired,
    addToOrder: PropTypes.func.isRequired
};

export default Guitar;
