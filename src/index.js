import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import reducer from './reducers'
import Board from './containers/Board.js'

const loggerMiddleware = createLogger()

const store = createStore(
  reducer,
  applyMiddleware(
    loggerMiddleware
  )
)

render(
  <Provider store={store}>
    <Board />
  </Provider>,
  document.getElementById('app')
)
