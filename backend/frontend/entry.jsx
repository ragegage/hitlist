import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { RootReducer } from './reducers'
import App from './components/app'
import MasterMiddleware from './middleware'

let store = createStore(RootReducer, MasterMiddleware)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

window.store = store
