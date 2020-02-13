import React, {Component} from 'react';
import './goal.css'

class Goal extends Component {

  render () {
    return (
      <li class='goal-li'>
        <div class='bord-r goalnum'>
          <p class='goal-p'>1.</p>
        </div>
        <div class='bord-r period'>
          <p class='goal-p'>1st</p>
        </div>
        <div class='bord-r tog'>
          <p class='goal-p'>00:00</p>
        </div>
        <div class='bord-r scorer'>
          <p class='goal-p'>12</p>
        </div>
        <div class='bord-r assist'>
          <p class='goal-p'>13</p>
        </div>
        <div class='bord-r assist'>
          <p class='goal-p'>13</p>
        </div>
        <p class='goal-p notes'>pp</p>
      </li>

    )
  }
}

export default Goal
