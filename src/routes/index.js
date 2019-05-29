// @flow

import * as React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import App from '../containers/App'
import Page from '../containers/Page'
import NotFound from '../containers/NotFound'

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/page" component={Page} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}
