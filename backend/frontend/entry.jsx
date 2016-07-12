import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import hitlist from './reducers'
import App from './components/app'

let store = createStore(hitlist)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
