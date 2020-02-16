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


  render () {
    console.log('timestate', this.state);
    return (
      <div id='container'>
        <div>
          <h1>New Game</h1>
        </div>
        <div>
          <p>Location</p>
          <Select options={rinks} onChange={(values) => this.setValues(values)} />
        </div>

        <div>
          <p>Home Team</p>
          <Select options={this.state.teams} onChange={(values) => this.setValues(values)} />
        </div>

        <div>
          <p>Away Team</p>
          <Select options={this.state.teams} onChange={(values) => this.setValues(values)} />
        </div>

        <div>
          <p>Date</p>
            <DateTimePicker
              value={this.state.date}
              onChange={(date) => this.onChangeDate(date)}
              disableClock={true}
              />



        </div>
      </div>
    )
  }
}

export default NewGame
