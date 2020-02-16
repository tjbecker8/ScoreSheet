import React, {Component} from 'react';
import './leagueLanding.css'
import { database } from '../../App';

class LeagueLanding extends Component {

getTeams=()=>{

}

  render () {
    return (

      <div id='container'>
        <div className="league-title-div">
          <p className="league-title-p">XYZ League</p>
        </div>

        <div>
          <p>Teams</p>
        </div>

        <div>
          <p>Games</p>
        </div>

        <div>
          <p>players</p>
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
