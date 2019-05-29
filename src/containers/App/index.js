// @flow
/** @jsx jsx */

import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { css, jsx, keyframes } from '@emotion/core'

import DefaultLayout from '../../layout/DefaultLayout'
import Button from '../../components/Button'
import reactLogo from '../../assets/images/react.svg'

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`

const title = {
  fontWeight: '400'
}

const logo = {
  width: '150px',
  filter: 'drop-shadow(0 0 30px #111)',
  animation: `${bounce} 1s ease`,
  overflow: 'visible'
}

class App extends React.Component<{}> {
  render = () => {
    return (
      <DefaultLayout>
        <main>
          <img src={reactLogo} alt="React Logo" css={logo} />
          <h1 css={title}>Welcome to the React Boilerplate</h1>
          <p>
            A simple React starter kit setup using: Redux&nbsp;⚛️, React
            Router&nbsp;🔀, Webpack&nbsp;📦, Babel&nbsp;🐠, Jest&nbsp;🚦,
            Eslint&nbsp;⚙️, Flow&nbsp;🔎 and Emotion&nbsp;👩‍🎤. Go to{' '}
            <Link to="/page">Page 2</Link>.
          </p>
          <Button href="https://github.com/richmccartney/react-starter-kit">
            View the project on GitHub
          </Button>
        </main>
      </DefaultLayout>
    )
  }
}

export default connect((state: {}) => state)(App)
