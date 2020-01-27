import React, {Component} from 'react';
import './gameSheet.css'

class GameSheet extends Component {

  state = {

  }

  render () {
    return (
      <div id='container'>


        <div class='flex-top'>
          <div>
            <h1>Team a</h1>
          </div>

          <div>
            <h1>VS</h1>
          </div>

          <div>
            <h1>Team b</h1>
          </div>
        </div>




        <div class='main-bar'>
          <div class='team-buttons'>
            <div>
              <span>
                <h2>Goal team a</h2>
              </span>
            </div>

            <div>
              <span>
                <h2>Peanlty team a</h2>
              </span>
            </div>

            <div>
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
              <div>
                <h3>team a goalie</h3>
                <h4>goalie stats</h4>
              </div>

              <div>
                <h3>team b goalie</h3>
                <h4>goalie stats</h4>
              </div>
            </div>
          </div>

          <div class='team-buttons'>
            <div>
              <h2>Goal taem b</h2>
            </div>

            <div>
              <h2>Peanlty team b</h2>
            </div>

            <div>
              <h3>save team b</h3>
            </div>
          </div>
        </div>




        <div class='bottom-main'>
          <div>
            <h3>Roster team a</h3>
            <ul>
              <li>player</li>
              <li>player</li>
              <li>player</li>
              <li>player</li>
              <li>player</li>
              <li>player</li>
              <li>player</li>
              <li>player</li>
              <li>player</li>
              <li>player</li>
            </ul>
          </div>

          <div>
            <div>
              <h3>team a goals</h3>
                <ol>
                  <li>goal</li>
                  <li>goal</li>
                  <li>goal</li>
                </ol>
            </div>
            <div>
              <h3>team a peanlties</h3>
                <ol>
                  <li>peanlty</li>
                  <li>penalty</li>
                  <li>penalty</li>
                </ol>
            </div>
          </div>

          <div>
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

          <div>
            <h3>roster team b</h3>
              <ul>
                <li>player</li>
                <li>player</li>
                <li>player</li>
                <li>player</li>
                <li>player</li>
                <li>player</li>
                <li>player</li>
                <li>player</li>
                <li>player</li>
                <li>player</li>
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
