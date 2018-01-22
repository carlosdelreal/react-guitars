import React from "react";

const Header = (props) => {
	// stateless functional component
	return (
		<header className="top">
			<h1>Guitar Warehouse</h1>
			<h2 className="tagline">{props.tagline}</h2>
		</header>
	)
}

export default Header;
