import React from "react";
import PropTypes from 'prop-types';

const Header = (props) => {
	// stateless functional component
	return (
		<header className="header">
			<a href="/" className="header__title"><h1>Guitar Warehouse</h1></a>
			<h2 className="header__tagline">{props.tagline}</h2>
		</header>
	)
}

Header.propTypes = {
	tagline: PropTypes.string
}

export default Header;
