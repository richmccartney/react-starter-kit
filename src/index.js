import * as React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// main routes
import AppRoutes from './routes'
import store from './state/store'

ReactDOM.hydrate(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('app')
)
