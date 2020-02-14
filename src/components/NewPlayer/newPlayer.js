import React, {Component} from 'react';
import './newPlayer.css'
import { database } from '../../App';


import Select from "react-dropdown-select";

const positions = [
  { label: "Center", value: 1 },
  { label: "Left Wing", value: 2 },
  { label: "Right Wing", value: 3 },
  { label: "Defense", value: 4 },
  { label: "Goalie", value: 5 },
];


class NewPlayer extends Component {

  constructor(props){
   super(props);
   this.state = {
     teams: [],
     firstName: null,
     lastName: null,
     number: null,
     position: null,
     team: null,

   };
 }

componentDidMount(){
  this.getTeams()
}


  getTeams =()=> {
    var teamRef = database.collection("teams")
    teamRef.get().then((querySnapshot)=> {
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        this.state.teams.push({label: data.team_name, id: doc.id, value: doc.id })
      });

    })
  }

  setTeam=(value)=>{
    this.setState({team: value})
  }

  setPosition=(value)=>{
    this.setState({position: value})
  }

  setFirstName=(e)=>{
    this.setState({firstName: e.target.value})
  }

  setLastName=(e)=>{
    this.setState({lastName: e.target.value})
  }

  setNumber=(e)=>{
    this.setState({number: e.target.value})
  }


//will need function to check duplicate numbers at some point
  createPlayer=()=>{
    if (!this.state.firstName || !this.state.lastName || !this.state.number || !this.state.position || !this.state.team) {
      alert('please make sure all fields are filled in')
    } else {
      var playerRef = database.collection('players').doc()

      playerRef.set({
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        number: this.state.number,
        position: this.state.position[0].label,
        team: this.state.team[0].id,
      })
      var teamRef = document.collection('teams').doc(this.state.team[0].id).collection('players').doc(playerRef.id)
      teamRef.set({
        id: playerRef.id,
        number: this.state.number,
      })
    }
  }

  render () {
    console.log(this.state);
    return (
      <div className='newPlayerContainer'>
        <p>New Player</p>

        <div>
          <p>Team:</p>
          <Select className="pointdropdown" options={this.state.teams} onChange={(values) => this.setTeam(values)} />
        </div>

        <div>
          <p>First Name:</p>
          <input type='text' />
        </div>

        <div>
          <p>Last Name:</p>
          <input type='text' />
        </div>

        <div>
          <p>Number:</p>
          <input type='text' />
        </div>

        <div>
          <p>Position:</p>
          <Select className="pointdropdown" options={positions} onChange={(values) => this.setPosition(values)} />
        </div>

        <button type='button' onClick={this.createPlayer}>Add New Player</button>

      </div>


    )
  }
}

export default NewPlayer
