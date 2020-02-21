import React, {Component} from 'react';


import { database } from '../../App';

class NewRink extends Component {

  constructor(props){
   super(props);
   this.state = {
     rink: '',
   };
 }

 rinkSet=(v)=>{
   this.setState({rink: v.target.value})
 }

 setRink=()=>{
   var rinkRef = database.collection('rinks').doc()
   rinkRef.set({
     name: this.state.rink
   })
   this.setState({rink: ''})
 }

  render () {
    console.log(this.state.rink);
    return(
      <div>
        <p>Add New Rink</p>
        <input type="text" onChange={(value)=>{this.rinkSet(value)}} value={this.state.rink} />
        <button type="button" onClick={this.setRink}>Add Rink</button>
      </div>
    )
  }
}
export default NewRink
