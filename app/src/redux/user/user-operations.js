import UserActions from './user-actions';
import SessionService from '../../services/session-service';

const UserOperations = {
	setAuthInfo: (tokens) => (dispatch, getState) => {
		dispatch(UserActions.setAccessToken(tokens?.access_token));
		dispatch(UserActions.setRefreshToken(tokens?.refresh_token));
	},

	setUserInfo: (userInfo) => (dispatch, getState) => {
		dispatch(UserActions.setUserInfo(userInfo));
	},

	logoutUser: () => (dispatch, getState) => {
		dispatch(UserActions.setAccessToken(null));
		dispatch(UserActions.setRefreshToken(null));
		dispatch(UserActions.setUserInfo({}));
	},

	refreshToken: (tokens) => async (dispatch, getState) => {
		try {
			const { data } = await SessionService.refreshToken(tokens);
			if (data.access_token) {
				dispatch(UserActions.setAccessToken(data.access_token)); // TODO P set id token as well?
			}
		} catch (error) {
			console.log('refresh error, logging out...');
			dispatch(UserActions.setAccessToken(null));
			dispatch(UserActions.setRefreshToken(null));
		}
	},
};

export default UserOperations;
