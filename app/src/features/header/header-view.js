import React from 'react';
import { useNavigate } from "react-router-dom";
import { RoutesLinks } from "../../routes/routes-links"
import { useAuth } from "../../hooks/useAuth"

const Header = () => {
	const navigate = useNavigate();
	
	const {isAuthenticated, logout} = useAuth()
	
	return (
		<nav className="navbar navbar-dark bg-secondary">
			<div className="row col-12 d-flex justify-content-center text-white">
				<button onClick={() => navigate(RoutesLinks.HOME)}>Home</button>
				<span className="h3">David Ashaolu</span>
				{isAuthenticated 
					? (<button onClick={()=>logout()}>Logout</button>) 
					: (<button onClick={() => navigate(RoutesLinks.LOGIN)}>Login</button>)
				}
				<button onClick={() => navigate(RoutesLinks.REGISTER)}>Register</button>
			</div>
		</nav>
	);
};

export default Header;
