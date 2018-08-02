// App.js
import * as React from 'react'
import { hot } from 'react-hot-loader'

import Button from './components/Button'

const App = () => (
  <div>
    Hello World! <Button>Click me!</Button>
  </div>
)

export default hot(module)(App)
