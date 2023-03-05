import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
	const user = useSelector((state) => state.user);
	console.log('dash');
	return (
		<>
			<div>{`Dashboard: Hello ${user?.username}`}</div>
		</>
	);
};

export default Dashboard;
