import React, {Component} from 'react';
import { database } from '../../App';

class Login extends Component {

  constructor(props){
   super(props);
   this.state = {
     date: new Date(),
     email: null,
     password: null,
   };
  }

  login=()=>{
    const {email, password} = this.state
    firebase.auth().signInWithEmailAndPassword(email, password).then(authUser => {
      console.log(authUser);
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    })
  }


  handleChange=(e)=> {
    this.setState({
      [e.target.id]: e.target.value
    })
  }



  render () {
    return (
      <div id='container'>
        <p>email</p>
        <input type='email' id="email" onChange={(value)=>{this.handleChange(value)}} value={this.state.email} />
        <p>password</p>
        <input type='password' id="password" onChange={(value)=>{this.handleChange(value)}} value={this.state.password} />
        <button type='button' onClick={this.signup}>Log In</button>
      </div>
    )
  }

}
export default Login
