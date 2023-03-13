import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'localforage';
import thunk from 'redux-thunk';
import UserReducer from './user';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user', 'tokens'], // TODO remove tokens from whitelist
};

const rootReducer = combineReducers({
	user: UserReducer.user,
	tokens: combineReducers({
		access: UserReducer.access,
		refresh: UserReducer.refresh,
	}),
});

const composeEnhancers = composeWithDevTools({
	// trace: true,
	// traceLimit: 25,
	actionsBlacklist: [],
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk];

const store = createStore(persistedReducer, {}, composeEnhancers(applyMiddleware(...middlewares)));
const persistor = persistStore(store, {});

export default { store, persistor };
