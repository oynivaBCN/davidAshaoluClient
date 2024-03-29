import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
	const user = useSelector((state) => state.user);
	return (
		<>
			<div>{`Dashboard: Hello ${user?.username}. Your role is: ${user?.role}`}</div>
		</>
	);
};

export default Dashboard;
