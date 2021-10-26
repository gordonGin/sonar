import { useEffect, useState } from 'react';
import { Menu } from '../api/Menu';

const useGetDish = (id) => {
	const [isLoading, setIsLoading] = useState(false);
	const [dish, setDish] = useState({});
	const [error, setError] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		Menu.GetDish()
			.withDishId(id)
			.execute()
			.then(({ data }) => setDish(data))
			.catch(({ error }) => {
				setError(error);
				setIsLoading(false);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [id]);
	return { isLoading, dish, error };
};

export default useGetDish;
