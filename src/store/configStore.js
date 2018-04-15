import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import filterText from '../reducers/filterText';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      text:filterText
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
