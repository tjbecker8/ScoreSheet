import React, {Component} from 'react';
import './skater.css'

class Skater extends Component {

  render () {

    return (
      <li class='player-li'>
        <div class='number'>
          <p class='p-num-name'>00</p>
        </div>
        <div class='name'>
          <p class='p-num-name'>last, first</p>
        </div>
      </li>
    )
  }
}
export default Skater
