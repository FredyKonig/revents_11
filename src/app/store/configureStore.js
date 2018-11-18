import { createStore, applyMiddleware, compose } from 'redux'
import rootReduecer from '../reducers/rootReducer'

export const configureStore = (preloadedState) => {
	const middlewares = [];
	const middlewareEnhancer = applyMiddleware(...middlewares);

	const storeEnhancers = [middlewareEnhancer];

	const composedEnhancer = compose(...storeEnhancers);

	const store = createStore(
		rootReduecer,
		preloadedState,
		composedEnhancer
	)
	
	return store;
}
