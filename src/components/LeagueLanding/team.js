import React, {Component} from 'react';

class Team extends Component {

  render () {
    
    return (
      <div>
      <p>{this.props.data.name}</p>
      </div>
    )
  }
}
export default Team
