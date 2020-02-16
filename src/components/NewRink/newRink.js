import React, {Component} from 'react';


import { database } from '../../App';

class NewTeam extends Component {

  constructor(props){
   super(props);
   this.state = {
     rink: '',
   };
 }

 rinkSet=(v)=>{
   this.setState({rink: v})
 }

 setRink=()=>{
   var rinkRef = database.collection('rinks').doc()

   rinkRef.set({
     name: this.state.rink
   })
 }

  render () {
    return(
      <div>
        <p>Add New Rink</p>
        <input type="text" onChange={(value)=>{this.rinkSet(value)}} value={this.state.rink} />
        <button type="button" onClick={this.setRink}>Add Rink</button>
      </div>
    )
  }
}
