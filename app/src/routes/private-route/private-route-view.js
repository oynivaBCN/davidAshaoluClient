import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RoutesLinks } from '../routes-links';

const PrivateRoute = ({ children, ...rest }) => {
	// TODO P ...rest?
	const data = useSelector((state) => state);

	return data.tokens?.access ? children : <Navigate to={RoutesLinks.HOME} />;
};

export default PrivateRoute;
