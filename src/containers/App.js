import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Global, css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'
import Button from '../components/Button'

class App extends React.Component {
  render = () => {
    return (
      <div>
        <Global
          styles={css`
            ${emotionNormalize}
            html,
            body {
              padding: 0;
              margin: 0;
              background: white;
              min-height: 100%;
              font-family: Helvetica, Arial, sans-serif;
            }
          `}
        />
        <main>
          <h1>Welcome to the react boilerplate</h1>
          <p>
            A simple React starter kit setup using; Redux ⚛️, React Router 🔀,
            Webpack 📦, Babel 🐠, Jest 🚦, Eslint ⚙️, Flow 🔎 and Emotion 👩‍🎤.
          </p>
          <Button href="https://github.com/richmccartney/react-starter-kit">
            View the project on GitHub
          </Button>
        </main>
      </div>
    )
  }
}

export default connect(state => state)(App)
