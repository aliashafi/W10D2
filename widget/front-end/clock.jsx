import React from 'react';

class Clock extends React.Component{

  constructor(){
    super();
    this.state = {
      currentTime: new Date(),

    };
  }

  componentDidMount() {
    // this.setState({ currentTime: date});
    this.handle = setInterval(this.updateTime.bind(this), 1000);
  }


  renderTime(){
    //set time
    let min = this.state.currentTime.getMinutes();
    let sec = this.state.currentTime.getSeconds();
    let h = this.state.currentTime.getHours();
    let minutes = min < 10 ? "0" + min : min;
    let seconds = sec < 10 ? "0" + sec : sec;
    let hours = h < 10 ? "0" + h : h;
    const timeString = [hours, minutes, seconds].join(":");
    return timeString;
  }

  renderDate(){
    let weekDays =['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let months = ['Jan', 'Feb', 'Mar', 'Apr', "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let day = weekDays[this.state.currentTime.getDay()];
    let date = this.state.currentTime.getDate();
    let month = months[this.state.currentTime.getMonth()];
    let year = this.state.currentTime.getFullYear();
    const fullDate = [day, month, date, year].join(" ");
    return fullDate;
  }

  updateTime() {
    // Format the time in HH:MM:SS
    
    this.setState({
      currentTime : this.tick()
    });
    this.renderTime(); 
  }

  tick() {
    //debugger;
    let newTime = this.state.currentTime.setSeconds(this.state.currentTime.getSeconds() + 1);
    return this.state.currentTime;
  }

  
  render(){
    return(
      <div className="clock">
        <div id="time">
          <h1>Time</h1>
          <h1>{this.renderTime()} </h1>
        </div>
        <div id="date">
          <h1>Date</h1>
          <h1>{this.renderDate()}</h1>
        </div>
      </div>
      )
  }
  
  componentWillUnmount(){
    this.handle = 0;
  }

}
  
  
  export default Clock;
  