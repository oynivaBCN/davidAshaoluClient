import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RoutesLinks } from '../../routes/routes-links';
import UserOperations from '../../redux/user/user-operations';
import SessionService from '../../services/session-service';

const Header = () => {
	const data = useSelector((state) => state);
	console.log('STATE in header:', data);
	const isLogged = !!data.tokens?.access;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogout = () => {
		SessionService.logout(data.tokens.access);
		dispatch(UserOperations.logoutUser());
	};

	return (
		<nav className="navbar navbar-dark bg-secondary">
			<div className="row col-12 d-flex justify-content-center text-white">
				<button onClick={() => navigate(RoutesLinks.HOME)}>Home</button>
				<span className="h3">David Ashaolu</span>
				{isLogged ? (
					<>
						<button onClick={() => handleLogout()}>Logout</button>
					</>
				) : (
					<>
						<button onClick={() => navigate(RoutesLinks.LOGIN)}>Login</button>
						<button onClick={() => navigate(RoutesLinks.REGISTER)}>Register</button>
					</>
				)}

				<button onClick={() => navigate(RoutesLinks.TEMP)}>Temp</button>
			</div>
		</nav>
	);
};

export default Header;
