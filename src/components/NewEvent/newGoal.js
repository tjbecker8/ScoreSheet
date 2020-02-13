import React, {Component} from 'react';
import './newGoal.css'

import Select from "react-dropdown-select";

const techCompanies = [
  { label: "Apple", value: 1 },
  { label: "Facebook", value: 2 },
  { label: "Netflix", value: 3 },
  { label: "Tesla", value: 4 },
  { label: "Amazon", value: 5 },
  { label: "Alphabet", value: 6 },
];

class NewGoal extends Component {


  render () {
    return(
      <div>
        <p>Goal for Team A</p>

        <p>Scored By:</p>
        <Select options={techCompanies} onChange={(values) => this.setValues(values)} />

        <p>Assists:</p>

        <p>Period:</p>

        <p>Time of Goal:</p>

        <p>Notes:</p>
      </div>
    )
  }
}

export default NewGoal
