import React, {Component} from 'react';
import './newLeague.css'
import fire from '../../fire'

import firebase from 'firebase'

class NewLeague extends Component {

createLeague = () => {
  
}

  render () {
    return (
      <div class="newLeagueContainer">
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
