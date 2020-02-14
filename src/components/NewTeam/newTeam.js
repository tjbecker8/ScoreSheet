import React, {Component} from 'react';
import './newTeam.css'

class NewTeam extends Component {
  render () {
    return (
      <div className='newTeamContainer'>
        <p>Create New Team</p>

        <div>
          <p>League: </p>
          <input type="text" />
        </div>

        <div>
          <p>Team Name:</p>
          <input type="text" />
        </div>

        <button type="button">Create Team</button>
      </div>
    )
  }
}

export default NewTeam
