import React, {Component} from 'react';
import './newGame.css'
import { database } from '../../App';

import Select from "react-dropdown-select";
import TimePicker from 'react-time-picker';

import DateTimePicker from 'react-datetime-picker'


const rinks = [
  { label: "Apple", value: 1 },
  { label: "Facebook", value: 2 },
  { label: "Netflix", value: 3 },
  { label: "Tesla", value: 4 },
  { label: "Amazon", value: 5 },
  { label: "Alphabet", value: 6 },
];

class NewGame extends Component {

  constructor(props){
   super(props);
   this.state = {
     date: new Date(),
     teams: [],
     homeTeam: null,
     awayTeam: null,
     location: null,
     league: ""
   };
 }

 componentDidMount(){
   this.getTeams()
 }

 onChangeTime=(t)=>{
   this.setState({time: t})
 }

 onChangeDate=(d)=>{
   this.setState({date: d})
 }

 getTeams =()=> {
   var teamRef = database.collection("teams")
   teamRef.get().then((querySnapshot)=> {
     querySnapshot.forEach((doc) => {
       let data = doc.data();
       this.state.teams.push({label: data.team_name, id: doc.id, value: doc.id })
     });
     this.setState({teamLoaded: true})
   })
 }

setLocation=(v)=>{
  this.setState({location: v})
}

setHomeTeam=(v)=>{
  this.setState({homeTeam: v})
}

setAwayTeam=(v)=>{
  this.setState({awayTeam: v})
}

createGame=()=>{
  if (!this.state.homeTeam || !this.state.awayTeam || !this.state.location) {
    alert('Please make sure all fields are filled in')
  } else {
    var gameRef = database.collection("games").doc()

    gameRef.set({
      home_team: this.state.homeTeam,
      away_team: this.state.awayTeam,
      location: this.state.location,
      league: this.state.league,
      date_time: this.state.date,
    })
    var leagueRef = database.collection("leagues").doc(this.state.league).collection('games').doc(gameRef.id)

    leagueRef.set({
      game_id: gameRef.id,
    })

    var gameRef = database.collection("teams")

    gameRef.doc(this.state.homeTeam).collection('games').doc(gameRef.id).set({
      game_id: gameRef.id,
    })

    gameRef.doc(this.state.awayTeam).collection('games').doc(gameRef.id).set({
      game_id: gameRef.id,
    })

    var rinkRef = database.collection('rinks').doc(this.state.location).collection("games").doc(gameRef.Id)
      rinkRef.set({
        game_id: gameRef.id
      })
  }
}

  render () {
    console.log('timestate', this.state);
    return (
      <div id='container'>
        <div>
          <h1>New Game</h1>
        </div>
        <div>
          <p>Location</p>
          <Select options={rinks} onChange={(values) => this.setLocation(values)} />
        </div>

        <div>
          <p>Home Team</p>
          <Select options={this.state.teams} onChange={(values) => this.setHomeTeam(values)} />
        </div>

        <div>
          <p>Away Team</p>
          <Select options={this.state.teams} onChange={(values) => this.setAwayTeam(values)} />
        </div>

        <div>
          <p>Date</p>
            <DateTimePicker
              value={this.state.date}
              onChange={(date) => this.onChangeDate(date)}
              disableClock={true}
              />
        </div>

        <div>
          <button type='button' onClick={this.createGame}>Create Game</button>
        </div>
      </div>
    )
  }
}

export default NewGame
