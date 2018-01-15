import React, { Component } from 'react';

class UpdateTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: new Date().getUTCSeconds();
    }
  }
  render(){
    return(
      <ul className="blocks">
        <li><h2>Year</h2><p>{this}</p></li>
        <li><h2>Month</h2></li>
        <li><h2>Day</h2></li>
        <li><h2>Hour</h2></li>
        <li><h2>Minute</h2></li>
        <li><h2>Second</h2></li>
      </ul>
    )
  }
}

export default UpdateTimer;
