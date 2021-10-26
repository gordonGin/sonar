import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MenuContext from '../state/MenuContext';

const MenuTile = ({ menuItem = [] }) => {
	const { menu, setMenu, isLoading, error } = useContext(MenuContext);
	debugger;
	return (
		<>
			<Link to={`batatas/${menuItem.id}`}>
				<div className="menu-item__container">
					<div className="menu-item__image">
						<img src={menuItem.img} />
					</div>
					<div className="menu-item__button">{menuItem.name}</div>
				</div>
			</Link>
		</>
	);
};

export default MenuTile;

MenuTile.propTypes = {
	menuItem: PropTypes.shape({ id: PropTypes.string, name: PropTypes.string }),
};
