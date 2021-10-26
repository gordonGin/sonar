import React, { useContext } from 'react';
import { Loader } from './index';
import { MenuTile } from './index';
import { useMenu } from '../hooks';
import MenuContext from '../state/MenuContext';

const Menu = () => {
	const { menu = [], setMenu, isLoading, error } = useMenu();

	return (
		<MenuContext.Provider value={{ menu, setMenu, isLoading, error }}>
			{isLoading && <Loader />}

			<div className="menu__container">
				{menu.map((item) => {
					return <MenuTile key={item.id} menuItem={item} />;
				})}
			</div>

			{error && <div>Sorry, something happened</div>}
		</MenuContext.Provider>
	);
};

export default Menu;
