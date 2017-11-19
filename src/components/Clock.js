import React from 'react';
import '../component-styles/Clock.css';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) & 60);
    const minutes = Math.floor((time / 1000 / 60) & 60);
    const hours = Math.floor(time / (1000 * 60 * 60) & 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    this.setState({
      days,
      hours,
      minutes,
      seconds
    });
  }

  leadingZero(num) {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  render() {
    return (
      <div id='time-items'>
        <div className='time-item'>{this.leadingZero(this.state.days)} days</div><br/>
        <div className='time-item'>{this.leadingZero(this.state.hours)} hours</div><br id='mid-br'/>
        <div className='time-item'>{this.leadingZero(this.state.minutes)} minutes</div><br/>
        <div className='time-item'>{this.leadingZero(this.state.seconds)} seconds</div><br/>
      </div>
    );
  }
}
