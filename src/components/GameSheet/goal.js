import React, {Component} from 'react';
import './goal.css'

class Goal extends Component {

  render () {
    return (
      <li class='goal-li'>
        <div class='bord-r'>
          <p class='goal-p'>1st</p>
        </div>
        <div class='bord-r'>
          <p class='goal-p'>00:00</p>
        </div>
        <div class='bord-r'>
          <p class='goal-p'>12</p>
        </div>
        <div class='bord-r'>
          <p class='goal-p'>13</p>
        </div>
        <div class='bord-r'>
          <p class='goal-p'>13</p>
        </div>
        <p class='goal-p'>pp</p>
      </li>

    )
  }
}

export default Goal
