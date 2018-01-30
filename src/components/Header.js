import React from "react";
import PropTypes from 'prop-types';

const repo = `/${window.location.pathname.split('/')[1]}`;
const Header = (props) => {
	// stateless functional component
	return (
		<header className="header">
			<h1><a href={repo} className="header__title">Guitar Warehouse</a></h1>
			<h2 className="header__tagline">{props.tagline}</h2>
		</header>
	)
}

Header.propTypes = {
	tagline: PropTypes.string
}

export default Header;
