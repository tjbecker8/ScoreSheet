import React, {Component} from 'react';
import './goal.css'

class Goal extends Component {

  render () {
    return (
      <li className='goal-li'>
        <div className='bord-r goalnum'>
          <p className='goal-p'>1.</p>
        </div>
        <div className='bord-r period'>
          <p className='goal-p'>1st</p>
        </div>
        <div className='bord-r tog'>
          <p className='goal-p'>00:00</p>
        </div>
        <div className='bord-r scorer'>
          <p className='goal-p'>12</p>
        </div>
        <div className='bord-r assist'>
          <p className='goal-p'>13</p>
        </div>
        <div className='bord-r assist'>
          <p className='goal-p'>13</p>
        </div>
        <p className='goal-p notes'>pp</p>
      </li>

    )
  }
}

export default Goal
