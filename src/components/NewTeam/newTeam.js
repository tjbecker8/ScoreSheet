import React, {Component} from 'react';
import './newTeam.css'
import { database } from '../../App';
import Select from "react-dropdown-select";

const options = [
  { label: "Apple", value: 1, title: 6, },
  { label: "Facebook", value: 2, title: 6, },
  { label: "Netflix", value: 3, title: 6, },
  { label: "Tesla", value: 4, title: 6, },
  { label: "Amazon", value: 5, title: 5, },
  { label: "Alphabet", value: 6, title: 6, },
];

class NewTeam extends Component {

  constructor(props){
   super(props);
   this.state = {
     leagues: [],
     teamName: null,
     selectedLeague: null,
   };
 }

 componentDidMount() {
   this.getLeagues()
 }

 getLeagues = () => {
   var leagueRef = database.collection("leagues")
   leagueRef.get().then((querySnapshot)=> {
     querySnapshot.forEach((doc) => {
       let data = doc.data();
       this.state.leagues.push({label: data.league_name, id: doc.id, value: doc.id })
     })
     this.setState({loaded: true})
   })
 }

setLeague =(value)=>{
  this.setState({selectedLeague: value})
}

teamNameSet=(e)=>{
  this.setState({teamName: e.target.value})
}

createTeam=()=>{
  if (!this.state.teamName) {
    alert("Team Name can't be blank")
  } else if (!this.state.selectedLeague) {
    alert('you must select a league')
  } else {
    var teamRef = database.collection("teams").doc()
    teamRef.set({
      team_name: this.state.teamName,
      league_id: this.state.selectedLeague[0].id,
      creator_id: 123,
    })

    var leagueRef = database.collection('leagues').doc(this.state.selectedLeague[0].id).collection('teams').doc(teamRef.id)
      leagueRef.set({
        name: this.state.teamName
      })
      this.setState({
        teamName: null,
        selectedLeague: null,
      })
  }
}

  render () {

    return (
      <div className='newTeamContainer'>
        <p>Create New Team</p>

        <div>
          <p>League: </p>

            <Select
              options={this.state.leagues}
              searchBy={"label"}
              sortBy={'label'}
              onChange={(value) => this.setLeague(value)}
              />

        </div>

        <div>
          <p>Team Name:</p>
          <input type="text" onChange={(value)=>{this.teamNameSet(value)}} />
        </div>

        <button type="button" onClick={this.createTeam}>Create Team</button>
      </div>
    )
  }
}

export default NewTeam
