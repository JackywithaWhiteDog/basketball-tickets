// import { useState } from 'react'
import { HashRouter, Switch } from "react-router-dom"
// import { PrivateRoute, PublicRoute } from "./route"
import { PublicRoute, PrivateRoute } from "./route"

import Layout from './layout'
//import Table from './table'
import Login from './login'
import Signup from './signup'
import PlayerPage from './playerPage'
import GamePage from './gamePage'
import TeamPage from './teamPage'
import SQLPage from './sqlPage'
import BuyTicketPage from './buyTicketPage'
import ViewTicketPage from './viewTicketPage'

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
        <PrivateRoute
          adminOnly={false}
          exact
          path="/buyticket"
          component={() => <Layout title="NBA - Buy tickets" component={() => <BuyTicketPage />} />}
        />
        <PrivateRoute
          adminOnly={false}
          exact
          path="/viewticket"
          component={() => <Layout title="NBA - Tickets" component={() => <ViewTicketPage />} />}
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
          restricted={false}
          exact
          path="/sql"
          component={() => <Layout title="NBA - Search by sql" component={() => <SQLPage />} />}
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
        <PrivateRoute
          adminOnly={false}
          exact
          path="/redirectTicket"
          redirect={"/viewticket"}
        />
      </Switch>
    </HashRouter>
  );
}
