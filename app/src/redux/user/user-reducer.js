/* eslint-disable default-case */
import produce from 'immer';
import { UserActionsTypes } from './user-actions-types';

const { SET_ACCESS_TOKEN, SET_REFRESH_TOKEN, SET_USER_INFO, RESET } = UserActionsTypes;

const defaultState = {
	auth: {
		access_token: null,
		refresh_token: null,
	},
	user: {},
};

const accessReducer = (state = defaultState.auth.access_token, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case SET_ACCESS_TOKEN:
				return action.payload.auth;
			case RESET:
				return {};
		}
	});

const refreshReducer = (state = defaultState.auth.refresh_token, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case SET_REFRESH_TOKEN:
				return action.payload.auth;
			case RESET:
				return null;
		}
	});

const userReducer = (state = defaultState.user, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case SET_USER_INFO:
				return action.payload.user_info;
			case RESET:
				return {};
		}
	});

const UserReducer = {
	access: accessReducer,
	refresh: refreshReducer,
	user: userReducer,
};

export default UserReducer;

// DA-Resources
// ChatGPT: "The state slice should have a property for the access token and another for the refresh token."
