import React, {Component} from 'react';
import './newLeague.css'
import fire from '../../fire'

class NewLeague extends Component {



  render () {
    return (
      <div class="newLeagueContainer">
        <p>New League</p>

        <div>
          <p>League Name</p>
          <input type='text' />
        </div>

        <button type="button" >Create League</button>
      </div>
    )
  }
}
export default NewLeague
