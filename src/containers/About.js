import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class About extends React.Component {
  render = () => {
    return (
      <div>
        <h1>About</h1>
        <p>
          Go to the <Link to="/">Home page</Link>
        </p>
      </div>
    )
  }
}

export default connect(state => state)(About)
