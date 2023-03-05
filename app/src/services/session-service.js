import axios from 'axios';

const SessionService = {
	async login(username, password) {
		return axios.post(`http://localhost:8080/session/login`, { username, password });
	},

	async logout(access_token) {
		return axios.post(`http://localhost:8080/session/logout`, { access_token });
	},

	async refreshToken(tokens) {
		return axios.post(`http://localhost:8080/session/refresh-token`, { tokens });
	},
};

export default SessionService;
