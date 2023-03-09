import axios from 'axios';

const SessionService = {
	async login(username, password, otp) {
		return axios.post(`http://localhost:8080/session/login`, { username, password, otp });
	},

	async logout(access_token) {
		return axios.post(`http://localhost:8080/session/logout`, { access_token });
	},

	async refreshToken(tokens) {
		return axios.post(`http://localhost:8080/session/refresh-token`, { tokens });
	},

	async signup(username, email, password) {
		return axios.post(`http://localhost:8080/session/signup`, { username, email, password });
	},
};

export default SessionService;
