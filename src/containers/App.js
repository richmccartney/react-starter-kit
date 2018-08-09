import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

class App extends React.Component {
  render = () => {
    return (
      <div>
        <h1>Hello World! </h1>
        <Link to="/about">
          <Button>Go to About</Button>
        </Link>
      </div>
    )
  }
}

export default connect(state => state)(App)
