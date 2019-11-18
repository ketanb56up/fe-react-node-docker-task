import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from '../components/Layout'
import Dashboard from '../components/Dashboard'
import ScanListings from '../components/ScanListings'

const AppRoutes = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/scanListings" component={ScanListings} />
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Layout>
  </Router>
)

export default AppRoutes
