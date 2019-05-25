// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import DefaultLayout from '../../layout/DefaultLayout'

class Page extends React.Component<{}> {
  render = () => {
    return (
      <DefaultLayout>
        <h2>This is page number two</h2>
        <p>
          I'm connected to state and I can link back to the first page{' '}
          <Link to="/">here</Link>.
        </p>
      </DefaultLayout>
    )
  }
}

export default connect((state: {}) => state)(Page)
