import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    // this.changeHour = this.changeHour.bind(this);
    this.state = {
      years: 5,
      months: 11,
      days: 29,
      hours:23,
      minutes:58,
      seconds: new Date().getUTCSeconds()
    }
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    var new_years = this.state.years;
    var new_months = this.state.months;
    var new_days = this.state.days;
    var new_hours = this.state.hours;
    var new_minutes = this.state.minutes;
    var new_seconds = new Date().getUTCSeconds();
    if(new_seconds === 0){
      if(new_minutes === 59){
        new_minutes = 0;
        if(new_hours === 23){
          new_hours = 0;
          if(new_days == 29){
            new_days = 0;
            if(new_months === 11){
              new_months = 0;
              new_years = new_years + 1;
            }
            else{
              new_months = new_months + 1;
            }
          }
          else{
            new_days = new_days + 1;
          }
        }
        else{
          new_hours = new_hours + 1;
        }
      }
      else{
        new_minutes = new_minutes + 1;
      }
    }
    this.setState({
      years: new_years,
      months: new_months,
      days: new_days,
      hours:new_hours,
      minutes:new_minutes,
      seconds: new_seconds
    });
  }

  render() {

    return (
      <div>
        <img id="liverpool" src= "https://jdsports-client-resources.co.uk/jdsports-client-resources/img/2017/0815/fredhopper-desktop-2017-liverpool-55e16b256cc2a7074e1a7649357a90a4.jpg"></img>
        <div className="time">
          <h1>Since Liverpool Last Won a Trophy</h1>
          <ul className="blocks">
            <li><h2>Year</h2><p>{this.state.years}</p></li>
            <li><h2>Month</h2><p>{this.state.months}</p></li>
            <li><h2>Day</h2><p>{this.state.days}</p></li>
            <li><h2>Hour</h2><p>{this.state.hours}</p></li>
            <li><h2>Minute</h2><p>{this.state.minutes}</p></li>
            <li><h2>Second</h2><p>{this.state.seconds}</p></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
