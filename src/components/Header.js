import React from "react";
// import logo from '../images/logo.svg';

const Header = (props) => {
	// stateless functional component
	return (
		<header className="header">
			<a href="/" className="header__title"><h1>Guitar Warehouse</h1></a>
			<h2 className="header__tagline">{props.tagline}</h2>
			{/* <img src={logo} alt="Logo" /> */}
		</header>
	)
}

export default Header;
