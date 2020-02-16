import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import App from './App'

import NewLeague from './components/NewLeague/newLeague'
import GameSheet from './components/GameSheet/gameSheet'

import NewTeam from './components/NewTeam/newTeam'
import NewPlayer from './components/NewPlayer/newPlayer'



class Routes extends Component {

  render(){
    return (
      <BrowserRouter>
				<Switch>

        <Route path="/newleague" component={NewLeague} />
        <Route path="/newteam" component={NewTeam} />
        <Route path="/newplayer" component={NewPlayer} />
        <Route path="/gamesheet" comonent={GameSheet} />

        <Route path="/" component={App} />

        </Switch>
			</BrowserRouter>
    )
  }
}

export default Routes;
