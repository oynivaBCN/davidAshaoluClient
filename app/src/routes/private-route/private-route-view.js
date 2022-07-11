import React from 'react';
import { Navigate } from "react-router-dom"
import { RoutesLinks } from '../routes-links';
// import { useStatus } from '../../hooks/useStatus';
import {useAuth} from "../../hooks/useAuth"

const PrivateRoute = ({ children }) => {

	// const status = useStatus()

	const { isAuthenticated } = useAuth()

	return isAuthenticated ? children : <Navigate to={RoutesLinks.HOME}/>;
};

export default PrivateRoute;
