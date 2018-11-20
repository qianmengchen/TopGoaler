/* eslint-disable no-undef */
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import { App } from './components/App/index';
import { DEBUG } from '../config';

const loggerMiddleware = createLogger();
const middlewares = [thunkMiddleware];
if (DEBUG) middlewares.push(loggerMiddleware);
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default class AppEntry extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
