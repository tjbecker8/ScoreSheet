import React, {Component} from 'react';
import './newLeague.css'
import Fire from '../../fire'

import firebase from 'firebase'
import "firebase/firestore"

class NewLeague extends Component {

createLeague = () => {
  var leagueRef = Fire.database().collection("leagues").doc()

  leagueRef.set({
    league_name: 'test',
    creator: '123',
  })
  console.log(leagueRef.id);
}

  render () {
    
    return (
      <div className="newLeagueContainer">
        <p>New League</p>

        <div>
          <p>League Name</p>
          <input type='text' />
        </div>

        <button type="button" onClick={this.createLeague} >Create League</button>
      </div>
    )
  }
}
export default NewLeague
