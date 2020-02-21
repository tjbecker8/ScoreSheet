import React, {Component} from 'react';
import { database } from '../../App';

class Signup extends Component {

  database.auth().createUserWithEmailAndPassword(email, password).catch((error)=> {
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
export default Signup
