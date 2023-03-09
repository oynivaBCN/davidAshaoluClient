import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import UserOperations from '../../redux/user/user-operations';
import { RoutesLinks } from '../../routes/routes-links';
import SessionService from '../../services/session-service.js';

const LoginForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();

	const [state, setState] = useState({
		username: '',
		password: '',
		otp: '',
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
			const { data } = await SessionService.login(state.username, state.password, state.otp ? state.otp : null);
			setAuthInfo(data?.tokens);
			setUserInfo(data?.user);
			if (data?.tokens?.access_token) {
				navigate(RoutesLinks.DASHBOARD, { state: { OTP: true } });
			}
		} catch (error) {
			console.error(error);
			alert(error.response.data?.name);
		}
	};

	const handleOTPClick = () => navigate(RoutesLinks.LOGIN, { state: { otp: true } });

	return (
		<>
			<button onClick={handleOTPClick}>I have an OTP</button>
			<div className="card col-12 col-lg-4 login-card mt-2 hv-center">
				<form onSubmit={handleLogin}>
					<div className="form-group text-left">
						<label htmlFor="exampleUserName">Username</label>
						<input
							type="text"
							className="form-control"
							id="username"
							aria-describedby="username"
							placeholder="Enter Username"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group text-left">
						<label htmlFor="exampleInputPassword1">Password</label>
						<input
							type="password"
							className="form-control"
							id="password"
							aria-describedby="password"
							placeholder="Password"
							onChange={handleChange}
						/>
					</div>
					{location.state?.otp ? (
						<div className="form-group text-left">
							<label htmlFor="exampleInputPassword1">OneTimePasscode</label>
							<input
								type="text"
								className="form-control"
								id="otp"
								aria-describedby="OTP"
								placeholder="123456"
								onChange={handleChange}
							/>
						</div>
					) : null}
					<button type="submit" className="btn btn-primary">
						Sign In
					</button>
				</form>
			</div>
		</>
	);
};

export default LoginForm;
