import axios from '../config/api';

export class Menu {
	static GetMenu() {
		class Get {
			execute() {
				return axios.get('/menu').then((response) => response);
			}
		}
		return new Get();
	}

	static GetDish() {
		class Get {
			withDishId(id) {
				this.id = id;
				return this;
			}
			execute() {
				return axios.get(`/menu/${this.id}`).then((response) => response);
			}
		}
		return new Get();
	}
}
