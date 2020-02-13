import React, {Component} from 'react';
import './newPenalty.css'

import Select from "react-dropdown-select";

const techCompanies = [
  { label: "Apple", value: 1 },
  { label: "Facebook", value: 2 },
  { label: "Netflix", value: 3 },
  { label: "Tesla", value: 4 },
  { label: "Amazon", value: 5 },
  { label: "Alphabet", value: 6 },
];

class NewPenalty extends Component {

  render() {
    return(
      <div>
        <p>New Penalty</p>

        <p>Player:</p>
        <Select options={techCompanies} onChange={(values) => this.setValues(values)} />

        <p>Penalty:</p>
        <Select options={techCompanies} onChange={(values) => this.setValues(values)} />

        <p>Length:</p>
        <Select options={techCompanies} onChange={(values) => this.setValues(values)} />

        <p>Time on Clock:</p>
        <input type="number" max="20" /> : <input type="number" max="60" />

        <button class="newPenaltyButton" type="button">Submit</button>

      </div>
    )
  }

}

export default NewPenalty
