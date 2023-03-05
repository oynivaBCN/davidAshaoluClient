import React, { useState } from 'react';

const RegistrationForm = () => {
	const [state, setState] = useState({
		email: '',
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

	const handleRegister = (e) => {
		e.preventDefault();
		if (state.password === state.confirmPassword) {
			console.log(state);
		} else {
			window.alert('Passwords do not match');
		}
	};

	return (
		<div className="card col-12 col-lg-4 login-card mt-2 hv-center">
			<form onSubmit={handleRegister}>
				<div className="form-group text-left">
					<label htmlFor="exampleInputEmail1">Email address</label>
					<input
						type="email"
						className="form-control"
						id="email"
						aria-describedby="emailHelp"
						placeholder="Enter email"
						onChange={handleChange}
					/>
					<small id="emailHelp" className="form-text text-muted">
						We'll never share your email with anyone else.
					</small>
				</div>
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
				<div className="form-group text-left">
					<label htmlFor="exampleInputPassword1">Confirm Password</label>
					<input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
				</div>
				<button type="submit" className="btn btn-primary">
					Register
				</button>
			</form>
		</div>
	);
};

export default RegistrationForm;
