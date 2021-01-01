// import { useState } from 'react'
import { HashRouter, Switch } from "react-router-dom"
// import { PrivateRoute, PublicRoute } from "./route"
import { PublicRoute } from "./route"

import Layout from './layout'
import Table from './table'
import Login from './login'
import Signup from './signup'

export default function App () {
  return (
    <HashRouter>
      <Switch>
        <PublicRoute
          restricted={false}
          exact
          path="/"
          component={() => <Layout component={() => <Table data={[1,2,3]} />} />}
        />
        <PublicRoute
          restricted={true}
          exact
          path="/login"
          component={() => <Login />}
        />
        <PublicRoute
          restricted={true}
          exact
          path="/signup"
          component={() => <Signup />}
        />
      </Switch>
    </HashRouter>
  );
}
