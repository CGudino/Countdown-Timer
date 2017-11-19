import React from 'react';
import { Clock } from './Clock';
import '../component-styles/App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: '',
      newDeadline: ''
    };
  }

  changeDeadline() {
    this.setState({
      deadline: this.state.newDeadline
    });
  }

  render() {
    let headline;
    if (this.state.deadline.length > 0) {
      headline = `Countdown to ${this.state.deadline}`;
    } else {
      headline = 'Please enter a date';
    }

    return (
      <div>
        <div id='app'>
          <div id='title'>{headline}</div>
          {this.state.deadline.length > 0 && <Clock
            deadline={this.state.deadline} />}
          <div>
            <input
              placeholder='New date'
              onChange={event => this.setState({
                newDeadline: event.target.value
              })} />
              <br/>
            <button onClick={() => this.changeDeadline()}>Submit</button>
          </div>
        </div>
        <footer>Created by <a href='CristianGudino.com'>Cristian Gudiño</a></footer>
      </div>
    );
  }
}
