import React, { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from '../features/header';
import Router from '../routes/router';
import UserOperations from '../redux/user/user-operations';

function App() {
	const location = useLocation();
	const tokens = useSelector((state) => state.tokens);
	const dispatch = useDispatch();

	const refreshToken = useCallback(async (tokens) => dispatch(UserOperations.refreshToken(tokens)), [dispatch]);

	const handleRouteChange = useCallback(async () => {
		if (tokens.access && tokens.refresh) {
			await refreshToken(tokens);
		}
	}, [tokens, refreshToken]);

	useEffect(() => {
		handleRouteChange(location.pathname);
	}, [location.pathname, handleRouteChange]);

	return (
		<>
			<Header />
			<Router />
		</>
	);
}

export default App;
