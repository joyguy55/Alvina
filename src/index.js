import React from 'react'
import { render } from 'react-dom'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/root-reducer.js'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const middleware = applyMiddleware(thunk, logger())
const store = createStore(rootReducer, middleware)

store.subscribe(() => {
  console.log("store changed", store.getState())
})

render(
 <Provider store={store}>
  <App />
 </Provider>,
  document.getElementById('root')
)
