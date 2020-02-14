import React, {Component} from 'react';
import './newLeague.css'
import { database } from '../../App';

import firebase from 'firebase'
import "firebase/firestore"

class NewLeague extends Component {
  constructor(props){
   super(props);
   this.state = {
     leagueName: ''
   };
 }


createLeague = () => {
  var leagueRef = database.collection("leagues").doc()

  leagueRef.set({
    league_name: 'test',
    creator: '123',
  })
  console.log(leagueRef.id);
}

leagueNameSet = (e) => {
  this.setState({leagueName: e.target.value})
}

  render () {
    console.log(this.state.leagueName);
    return (
      <div className="newLeagueContainer">
        <p>New League</p>

        <div>
          <p>League Name</p>
          <input type='text' onChange={(value)=>{this.leagueNameSet(value)}} />
        </div>

        <button type="button" onClick={this.createLeague} >Create League</button>
      </div>
    )
  }
}
export default NewLeague
