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

        <div className="newGoalDiv">
          <p className="newGoalP" >Scored By:</p>
          <Select className="pointdropdown" options={techCompanies} onChange={(values) => this.setValues(values)} />
        </div>

        <div className="newGoalDiv">
          <p className="newGoalP" >Assist #1:</p>
          <Select options={techCompanies} onChange={(values) => this.setValues(values)} />
        </div>

        <div className="newGoalDiv">
          <p className="newGoalP" >Assist #2:</p>
          <Select options={techCompanies} onChange={(values) => this.setValues(values)} />
        </div>

        <div className="newGoalDiv">
          <p className="newGoalP" >Period:</p>
          <Select options={techCompanies} onChange={(values) => this.setValues(values)} />
        </div>

        <div className="newGoalDiv">
          <p className="newGoalP" >Time of Goal on Clock:</p>
          <input type="number" max="20" /> : <input type="number" max="60" />
        </div>

        <div className="newGoalDiv">
          <p className="newGoalP" >Notes:</p>
          <Select options={techCompanies} onChange={(values) => this.setValues(values)} />
        </div>

        <div className="newGoalDivButton" >
         <button className="newGoalButton" type="button">Submit</button>
        </div>

      </div>
    )
  }
}

export default NewGoal
