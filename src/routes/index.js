// @flow

import * as React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import App from '../containers/App'
import Page from '../containers/Page'

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/page" component={Page} />
      </Switch>
    </BrowserRouter>
  )
}
