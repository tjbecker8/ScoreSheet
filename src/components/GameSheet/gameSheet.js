import React, {Component} from 'react';
import './gameSheet.css'
import Skater from './skater'
import Goal from './goal'
import Penalty from './peanlty'

import NewGoal from '../NewEvent/newGoal'

class GameSheet extends Component {

  state = {

  }

  render () {
    return (
      <div id='container'>

        <div class='popup'>
          <NewGoal />
        </div>


        <div class='flex-top'>
          <div class='team-name-top'>
            <h1>Team a</h1>
          </div>

          <div class='vs'>
            <h1>VS</h1>
          </div>

          <div class='team-name-top'>
            <h1>Team b</h1>
          </div>
        </div>




        <div class='main-bar'>
          <div class='team-buttons'>
            <div class='goal-div'>
              <span>
                <h2>Goal team a</h2>
              </span>
            </div>

            <div class='goal-div'>
              <span>
                <h2>Peanlty team a</h2>
              </span>
            </div>

            <div class='goal-div'>
              <span>
                <h2>save team a</h2>
              </span>
            </div>
          </div>

          <div class='center-main'>
            <div>
              <h3>league name</h3>
            </div>
            <div>
              <h4>date and time</h4>
            </div>

            <div>
              <h1> 0 - 0 </h1>
            </div>

            <div class='goalies'>
              <div class='goalie'>
                <h3>team a goalie</h3>
                <h4>goalie stats</h4>
              </div>

              <div class='goalie'>
                <h3>team b goalie</h3>
                <h4>goalie stats</h4>
              </div>
            </div>
          </div>

          <div class='team-buttons'>
            <div class='goal-div'>
              <h2>Goal taem b</h2>
            </div>

            <div class='goal-div'>
              <h2>Peanlty team b</h2>
            </div>

            <div class='goal-div'>
              <h2>save team b</h2>
            </div>
          </div>
        </div>




        <div class='bottom-main'>
          <div class='roster'>
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

          <div class='goals-and-pens'>
            <div>
              <h3>team a goals</h3>
              <div class='goal-table-key'>
                <div class='bord-r-tab goalnum'>
                  <p class='vert'>#</p>
                </div>
                <div class='bord-r-tab period'>
                  <p class='vert'>Period</p>
                </div>
                <div class='bord-r-tab tog'>
                  <p class='vert'>T.O.G.</p>
                </div>
                <div class='bord-r-tab scorer'>
                  <p class='vert'>Scorer</p>
                </div>
                <div class='bord-r-tab assist'>
                  <p class='vert'>1st Assist</p>
                </div>
                <div class='bord-r-tab assist'>
                  <p class='vert'>2nd Assist</p>
                </div>
                <div class='bord-r-tab notes'>
                  <p class='vert'>notes</p>
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

          <div class='goals-and-pens'>
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

          <div class='roster'>
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
