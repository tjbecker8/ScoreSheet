import React, {Component} from 'react';
import './peanlty.css'

class Penalty extends Component {
  render () {
    return (
      <li>
        <div className='penalty'>
          <div className='bord-r'>
            <p className='pen-p'>2nd</p>
          </div>
          <div className='bord-r'>
            <p className='pen-p'>12</p>
          </div>
          <div className='bord-r'>
            <p className='pen-p'>2:00</p>
          </div>
          <div >
            <p className='pen-p'>Tripping</p>
          </div>
        </div>
      </li>
    )
  }
}
export default Penalty
