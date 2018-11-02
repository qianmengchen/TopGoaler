import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import { App } from './components/App/index'

const loggerMiddleware = createLogger()
const store = createStore(rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

export default class AppEntry extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <App />
      </Provider>
    );
  }
}
