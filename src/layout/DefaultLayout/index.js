// @flow
/** @jsx jsx */

import * as React from 'react'
import { Global, css, jsx } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'

type PropType = {
  children: React.Node
}

const reset = css`
  * {
    padding: 0;
    margin: 0;
  }
  * + * {
    margin-top: 1.5rem;
  }
  html,
  body {
    background: #2d3142;
    color: #d8d5db;
    min-height: 100%;
    line-height: 1.5;
    font-family: Helvetica, Arial, sans-serif;
  }
  p {
    color: #adacb5;
  }
  a {
    color: #eae8ff;
  }
`

const container = {
  width: '100%',
  maxWidth: '640px',
  margin: '0 auto',
  textAlign: 'center',
  padding: '120px 0'
}

class DefaultLayout extends React.Component<PropType> {
  render = () => {
    const { children } = this.props
    return (
      <div css={container}>
        <Global
          styles={css`
            ${emotionNormalize}
            ${reset}
          `}
        />
        {children}
        <footer>
          <p>
            <small>
              Created by{' '}
              <a href="https://twitter.com/richmccartney">Richard McCartney</a>.
            </small>
          </p>
        </footer>
      </div>
    )
  }
}

export default DefaultLayout
