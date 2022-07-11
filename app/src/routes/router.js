import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { RoutesLinks } from './routes-links';

import Home from '../features/home';
import Dashboard from "../features/dashboard"
import Login from '../features/login';
import Register from "../features/register"

import PrivateRoute from './private-route';

const Router = () => {
	return (
		<Routes>
            <Route path={RoutesLinks.HOME} element={<Home />}/>
            <Route path={RoutesLinks.LOGIN} element={<Login />}/>
            <Route path={RoutesLinks.REGISTER} element={<Register />}/>

            <Route
                path={RoutesLinks.DASHBOARD}
                element={
                    <PrivateRoute >
                        <Dashboard />
                    </PrivateRoute>
                }
                />
        </Routes>
   )
}

export default Router;

