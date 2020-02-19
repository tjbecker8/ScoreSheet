import React, {Component} from 'react';
import './leagueLanding.css'
import { database } from '../../App';

import Team from './team';
import Player from './player';

class LeagueLanding extends Component {

  constructor(props){
   super(props);
   this.state = {
     teams: [],
     players: [],
     teamsRetrieved: 0,
     playersRetrieved: 0,
   };
 }

  componentDidMount(){
    this.getTeams()
  }

getTeams=()=>{
   var leagueRef = database.collection('leagues').doc("VM83UoFvyDlgPNaM84Co").collection('teams')
    leagueRef.get().then((info) => {
      info.forEach((doc) => {
        var teamRef = database.collection('teams').doc(doc.id)
        teamRef.get().then((doc)=>{
          var data = doc.data()
          var teamId = doc.id
          this.state.teams.push({name: data.team_name, id: doc.id })
          this.setState({teamsRetrieved: this.state.teamsRetrieved ++})
          var teamPlayerRef = database.collection("teams").doc(doc.id).collection('players')
          teamPlayerRef.get().then((info) => {
            info.forEach((doc) => {
              this.state.players.push({id: doc.id, team: teamId})
              this.setState({playersRetrieved: this.state.playersRetrieved ++})
            })
          })
        })
      })
    })
}




  render () {

    return (

      <div id='container'>
        <div className="league-title-div">
          <p className="league-title-p">XYZ League</p>
        </div>

        <div>
          <p>Teams</p>
          {
            this.state.teams.map((t, index) => {
              return <Team data={t} key={index} />
            })
          }

        </div>

        <div>
          <p>Games</p>
        </div>

        <div>
          <p>players</p>
            {
              this.state.players.map((p, index) => {
                return <Player data={p} key={index} />
              })
            }
        </div>

        <div>
          <button>New Game</button>
        </div>

        <div>
          <button>New Team</button>
        </div>

      </div>

    )
  }
}

export default LeagueLanding
