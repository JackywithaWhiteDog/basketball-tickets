// import { useState } from 'react'
import { HashRouter, Switch } from "react-router-dom"
// import { PrivateRoute, PublicRoute } from "./route"
import { PublicRoute } from "./route"

import Layout from './layout'
//import Table from './table'
import Login from './login'
import Signup from './signup'
import PlayerPage from './playerPage'
import GamePage from './gamePage'
import TeamPage from './teamPage'
import TicketPage from './ticketPage'

export default function App () {
  return (
    <HashRouter>
      <Switch>
        <PublicRoute
          restricted={false}
          redirect={"/player"}
          exact
          path="/"
        />
        <PublicRoute
          restricted={false}
          exact
          path="/player"
          component={() => <Layout title="NBA - Search for players" component={() => <PlayerPage />} />}
        />
        <PublicRoute
          restricted={false}
          exact
          path="/ticket"
          component={() => <Layout title="NBA - tickets" component={() => <TicketPage />} />}
        />
        <PublicRoute
          restricted={false}
          exact
          path="/game"
          component={() => <Layout title="NBA - Search for games" component={() => <GamePage />} />}
        />
        <PublicRoute
          restricted={false}
          exact
          path="/team"
          component={() => <Layout title="NBA - Search for teams" component={() => <TeamPage />} />}
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
