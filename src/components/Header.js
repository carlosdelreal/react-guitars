import React from "react";
// import logo from '../images/logo.svg';

const Header = (props) => {
	// stateless functional component
	return (
		<header className="top">
			<h1>Guitar Warehouse</h1>
			<h2 className="tagline">{props.tagline}</h2>
			{/* <img src={logo} alt="Logo" /> */}
		</header>
	)
}

export default Header;
