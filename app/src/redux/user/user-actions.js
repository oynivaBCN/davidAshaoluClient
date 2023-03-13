import { UserActionsTypes } from './user-actions-types';

const UserActions = {
	setAccessToken: (access_token) => ({
		type: UserActionsTypes.SET_ACCESS_TOKEN,
		payload: { auth: access_token },
	}),

	setRefreshToken: (refresh_token) => ({
		type: UserActionsTypes.SET_REFRESH_TOKEN,
		payload: { auth: refresh_token },
	}),

	setUserInfo: (userInfo) => ({
		type: UserActionsTypes.SET_USER_INFO,
		payload: { user_info: userInfo },
	}),
};

export default UserActions;
