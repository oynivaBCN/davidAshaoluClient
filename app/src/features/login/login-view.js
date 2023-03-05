import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserOperations from '../../redux/user/user-operations';
import { RoutesLinks } from '../../routes/routes-links';
import SessionService from '../../services/session-service.js';

const LoginForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [state, setState] = useState({
		username: '',
		password: '',
	});

	const handleChange = (e) => {
		const { id, value } = e.target;
		setState((prevState) => ({
			...prevState,
			[id]: value,
		}));
	};

	const setAuthInfo = (data) => {
		dispatch(UserOperations.setAuthInfo(data));
	};

	const setUserInfo = (data) => {
		dispatch(UserOperations.setUserInfo(data));
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const { data } = await SessionService.login(state.username, state.password);
			setAuthInfo(data?.tokens);
			setUserInfo(data?.user);
			if (data?.tokens?.access_token) {
				navigate(RoutesLinks.DASHBOARD);
			}
		} catch (error) {
			console.error(error);
			alert(error.response.data?.name);
		}
	};

	return (
		<>
			<div className="card col-12 col-lg-4 login-card mt-2 hv-center">
				<form onSubmit={handleLogin}>
					<div className="form-group text-left">
						<label htmlFor="exampleUserName">Username</label>
						<input
							type="text"
							className="form-control"
							id="username"
							aria-describedby="usernamehelp"
							placeholder="Enter Username"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group text-left">
						<label htmlFor="exampleInputPassword1">Password</label>
						<input type="password" className="form-control" id="password" placeholder="Password" onChange={handleChange} />
					</div>
					<button type="submit" className="btn btn-primary">
						Sign In
					</button>
				</form>
			</div>
		</>
	);
};

export default LoginForm;
