// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import DefaultLayout from '../../layout/DefaultLayout'

class Page extends React.Component<{}> {
  render = () => {
    return (
      <DefaultLayout>
        <h1>404 Not Found</h1>
        <p>
          Take me back to the <Link to="/">home page</Link>.
        </p>
      </DefaultLayout>
    )
  }
}

export default connect((state: {}) => state)(Page)
