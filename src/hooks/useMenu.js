import { useEffect, useState } from 'react';
import { Menu } from '../api/Menu';

const useMenu = () => {
	const [menu, setMenu] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		Menu.GetMenu()
			.execute()
			.then(({ data }) => setMenu(data))
			.catch((error) => setError(error))
			.finally(() => {
				setIsLoading(false);
			});
	}, []);
	return { menu, setMenu, isLoading, error };
};

export default useMenu;
