import React, {Component} from 'react';
import { database } from '../../App';

class Login extends Component {

  database.auth().signInWithEmailAndPassword(email, password).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

  render () {
    return (

    )
  }

}
export default Login
