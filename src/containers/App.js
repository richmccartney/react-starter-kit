import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

class App extends React.Component {
  render = () => {
    return (
      <div>
        <h1>Welcome to the react boilerplate</h1>
        <p>
          A simple React starter kit setup using; Redux ⚛️, React Router 🔀,
          Webpack 📦, Babel 🐠, Jest 🚦, Eslint ⚙️, Flow 🔎 and Emotion 👩‍🎤.
        </p>
        <Button href="https://github.com/richmccartney/react-starter-kit">
          View the project on GitHub
        </Button>
      </div>
    )
  }
}

export default connect(state => state)(App)
