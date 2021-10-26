import React from 'react';
import SonarLogo from '../assets/sonarsource-white-logo.svg';

const Navbar = () => {
	return (
		<div className="navbar__container">
			<div className="navbar__image-container">
				<img className="navbar__image" src={SonarLogo} alt="logo" />
			</div>
			<div className="navbar__items-container">
				<div className="navbar__items">why us</div>
				<div className="navbar__items">Products</div>
				<div className="navbar__items">Customers</div>
			</div>
		</div>
	);
};
export default Navbar;
