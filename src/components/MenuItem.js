import React from 'react';
import PropTypes from 'prop-types';
import { useGetDish } from '../hooks';

const MenuItem = ({ match }) => {
	const { params: { id } = {} } = match;
	const { isLoading, dish = {}, error } = useGetDish(id);
	debugger;
	return (
		<>
			{isLoading && <div>Loading your dish</div>}
			<div className="menu-item__display-container">
				<label className="menu-item__label">{}</label>
				<div className="menu-item__attribute">{dish.name}</div>
			</div>
			{error && (
				<div>Sorry, at the moment not possible to display your dish</div>
			)}
		</>
	);
};

MenuItem.propTypes = {
	label: PropTypes.string,
	attribute: PropTypes.string,
	match: PropTypes.any,
};

export default MenuItem;
