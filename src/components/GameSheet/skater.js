import React, {Component} from 'react';
import './skater.css'

class Skater extends Component {

  render () {

    return (
      <li className='player-li'>
        <div className='number'>
          <p className='p-num-name'>00</p>
        </div>
        <div className='name'>
          <p className='p-num-name'>last, first</p>
        </div>
      </li>
    )
  }
}
export default Skater
