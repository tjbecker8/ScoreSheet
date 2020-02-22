import React, {Component} from 'react';
import { database } from '../../App';
import firebase from 'firebase';
import "firebase/firestore"
import 'firebase/auth';
import '@firebase/firestore'

class SignUp extends Component {
  constructor(props){
   super(props);
   this.state = {
     date: new Date(),
     email: null,
     password: null,
     firstName: null,
     lastName: null,
   };
 }


handleChange=(e)=> {
  this.setState({
    [e.target.id]: e.target.value
  })
}

signup=()=>{
  const {email, password} = this.state
  firebase.auth().createUserWithEmailAndPassword(email, password).then(authUser => {
    console.log(authUser);
      }).catch((error)=> {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}


  render () {
    console.log('signup state', this.state);
    return (
      <div id='container'>
        <p>first name</p>
        <input type='text' id="firstName" onChange={(value)=>{this.handleChange(value)}} value={this.state.firstName} />
        <p>last name</p>
        <input type='text' id="lastName" onChange={(value)=>{this.handleChange(value)}} value={this.state.lastName} />
        <p>email</p>
        <input type='email' id="email" onChange={(value)=>{this.handleChange(value)}} value={this.state.email} />
        <p>password</p>
        <input type='password' id="password" onChange={(value)=>{this.handleChange(value)}} value={this.state.password} />
        <button type='button' onClick={this.signup}>sign up</button>

      </div>

    )
  }

}
export default SignUp
