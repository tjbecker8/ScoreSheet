import React, {Component} from 'react';
import './peanlty.css'

class Penalty extends Component {
  render () {
    return (
      <li>
        <div class='penalty'>
          <div class='bord-r'>
            <p class='pen-p'>2nd</p>
          </div>
          <div class='bord-r'>
            <p class='pen-p'>12</p>
          </div>
          <div class='bord-r'>
            <p class='pen-p'>2:00</p>
          </div>
          <div >
            <p class='pen-p'>Tripping</p>
          </div>
        </div>
      </li>
    )
  }
}
export default Penalty
