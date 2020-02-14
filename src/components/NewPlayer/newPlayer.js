import React, {Component} from 'react';
import './newPlayer.css'

import Select from "react-dropdown-select";

const techCompanies = [
  { label: "Apple", value: 1 },
  { label: "Facebook", value: 2 },
  { label: "Netflix", value: 3 },
  { label: "Tesla", value: 4 },
  { label: "Amazon", value: 5 },
  { label: "Alphabet", value: 6 },
];


class NewPlayer extends Component {

  render () {
    return (
      <div className='newPlayerContainer'>
        <p>New Player</p>

        <div>
          <p>Team:</p>
          <Select className="pointdropdown" options={techCompanies} onChange={(values) => this.setValues(values)} />
        </div>

        <div>
          <p>First Name:</p>
          <input type='text' />
        </div>

        <div>
          <p>Last Name:</p>
          <input type='text' />
        </div>

        <div>
          <p>Number:</p>
          <input type='text' />
        </div>

        <div>
          <p>Position:</p>
          <input type='text' />
        </div>

        <button type='button'>Add New Player</button>

      </div>


    )
  }
}

export default NewPlayer
