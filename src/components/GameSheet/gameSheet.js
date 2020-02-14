import React, {Component} from 'react';
import './gameSheet.css'
import Skater from './skater'
import Goal from './goal'
import Penalty from './peanlty'

import NewGoal from '../NewEvent/newGoal'
import NewPenalty from '../NewEvent/newPenalty'

class GameSheet extends Component {

  state = {

  }

  render () {
    return (
      <div id='container'>

        <div className='popup goalpopup'>
          <NewGoal />
        </div>

        <div className='popup penaltypopup'>
          <NewPenalty />
        </div>


        <div className='flex-top'>
          <div className='team-name-top'>
            <h1>Team a</h1>
          </div>

          <div className='vs'>
            <h1>VS</h1>
          </div>

          <div className='team-name-top'>
            <h1>Team b</h1>
          </div>
        </div>




        <div className='main-bar'>
          <div className='team-buttons'>
            <div className='goal-div'>
              <span>
                <h2>Goal team a</h2>
              </span>
            </div>

            <div className='goal-div'>
              <span>
                <h2>Peanlty team a</h2>
              </span>
            </div>

            <div className='goal-div'>
              <span>
                <h2>save team a</h2>
              </span>
            </div>
          </div>

          <div className='center-main'>
            <div>
              <h3>league name</h3>
            </div>
            <div>
              <h4>date and time</h4>
            </div>

            <div>
              <h1> 0 - 0 </h1>
            </div>

            <div className='goalies'>
              <div className='goalie'>
                <h3>team a goalie</h3>
                <h4>goalie stats</h4>
              </div>

              <div className='goalie'>
                <h3>team b goalie</h3>
                <h4>goalie stats</h4>
              </div>
            </div>
          </div>

          <div className='team-buttons'>
            <div className='goal-div'>
              <h2>Goal taem b</h2>
            </div>

            <div className='goal-div'>
              <h2>Peanlty team b</h2>
            </div>

            <div className='goal-div'>
              <h2>save team b</h2>
            </div>
          </div>
        </div>




        <div className='bottom-main'>
          <div className='roster'>
            <h3>Roster team a</h3>
            <ul>
              <Skater />
              <Skater />
              <Skater />
              <Skater />
              <Skater />
              <Skater />
              <Skater />
              <Skater />
              <Skater />
              <Skater />
              <Skater />
              <Skater />
              <Skater />
              <Skater />
              <Skater />
              <Skater />
              <Skater />
              <Skater />
              <Skater />
              <Skater />
            </ul>
          </div>

          <div className='goals-and-pens'>
            <div>
              <h3>team a goals</h3>
              <div className='goal-table-key'>
                <div className='bord-r-tab goalnum'>
                  <p className='vert'>#</p>
                </div>
                <div className='bord-r-tab period'>
                  <p className='vert'>Period</p>
                </div>
                <div className='bord-r-tab tog'>
                  <p className='vert'>T.O.G.</p>
                </div>
                <div className='bord-r-tab scorer'>
                  <p className='vert'>Scorer</p>
                </div>
                <div className='bord-r-tab assist'>
                  <p className='vert'>1st Assist</p>
                </div>
                <div className='bord-r-tab assist'>
                  <p className='vert'>2nd Assist</p>
                </div>
                <div className='bord-r-tab notes'>
                  <p className='vert'>notes</p>
                </div>
              </div>
                <ol>
                  <Goal />
                  <li>goal</li>
                  <li>goal</li>
                </ol>
            </div>
            <div>
              <h3>team a peanlties</h3>
                <ol>
                  <Penalty />
                  <li>penalty</li>
                  <li>penalty</li>
                </ol>
            </div>
          </div>

          <div className='goals-and-pens'>
            <div>
              <h3>team b goals</h3>
              <ol>
                <li>goal</li>
                <li>goal</li>
                <li>goal</li>
              </ol>
            </div>
            <div>
              <h3>team b peanlties</h3>
                <ol>
                  <li>peanlty</li>
                  <li>penalty</li>
                  <li>penalty</li>
                </ol>
            </div>
          </div>

          <div className='roster'>
            <h3>roster team b</h3>
              <ul>
                <Skater />
                <Skater />
                <Skater />
                <Skater />
                <Skater />
                <Skater />
                <Skater />
                <Skater />
                <Skater />
                <Skater />
                <Skater />
                <Skater />
                <Skater />
                <Skater />
                <Skater />
                <Skater />
                <Skater />
                <Skater />
                <Skater />
                <Skater />
              </ul>
          </div>
        </div>












        <div>
          <h3>Game officials</h3>
        </div>





      </div>
    )
  }
}

export default GameSheet
