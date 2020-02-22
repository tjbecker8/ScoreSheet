import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import App from './App'

import NewLeague from './components/NewLeague/newLeague'
import GameSheet from './components/GameSheet/gameSheet'

import NewTeam from './components/NewTeam/newTeam'
import NewPlayer from './components/NewPlayer/newPlayer'
import LeagueLanding from './components/LeagueLanding/leagueLanding'
import NewGame from './components/NewGame/newGame'
import NewRink from './components/NewRink/newRink'
import SignUp from './components/Login/signup'



class Routes extends Component {

  render(){
    return (
      <BrowserRouter>
				<Switch>

        <Route path="/newleague" component={NewLeague} />
        <Route path="/newteam" component={NewTeam} />
        <Route path="/newplayer" component={NewPlayer} />
        <Route path="/game" component={GameSheet} />
        <Route path="/league" component={LeagueLanding} />
        <Route path="/newgame" component={NewGame} />
        <Route path="/newrink" component={NewRink} />
        <Route path="/signup" component={SignUp} />



        <Route path="/" component={App} />

        </Switch>
			</BrowserRouter>
    )
  }
}

export default Routes;
