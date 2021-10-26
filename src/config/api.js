import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://foods.free.beeceptor.com/',
});

export default instance;
