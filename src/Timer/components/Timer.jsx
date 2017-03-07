/**
 * Created by woza on 3/5/17.
 */
import moment from 'moment';
import React, {Component} from 'react';
import TimerHeader from '../../TimerHeader/components/TimerHeader';
import TimerButton from '../../TimerButton/components/TimerButton';
import TimerConfig from '../../TimerConfig/components/TimerConfig';
import TimerDisplay from '../../TimerDisplay/components/TimerDisplay';
import * as timerStates from '../../TimerState/components/TimerState';


class Timer extends Component{
  constructor() {
    super();

    this.state = {
      currentTime: moment.duration(25, 'minutes'),
      baseTime: moment.duration(25, 'minutes'),
      timerState: timerStates.NOT_SET,
      beginTimer: null,
      timeLeft: moment.duration(25, 'minutes'),
    };

    this.setBaseTime = this.setBaseTime.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.reduceTimer = this.reduceTimer.bind(this);
  }

  setBaseTime(newBaseTime){
    this.setState({
        baseTime: newBaseTime,
      currentTime: newBaseTime,
      timeLeft: newBaseTime
    });
  }

  startTimer(){
    this.setState({
      timerState: timerStates.RUNNING,
      beginTimer: moment()
    })
    setInterval(this.reduceTimer, 100)
  }

  reduceTimer(){
    let diffTimes = moment().diff(this.state.beginTimer);
    let timeLeft = moment.duration(this.state.currentTime).subtract(diffTimes, 'milliseconds');

    this.setState({
      timeLeft: timeLeft
    })
  }

  render(){
    return (
      <div className="container-fluid">
        <TimerHeader/>
        <TimerDisplay timeLeft={this.state.timeLeft}/>
        <TimerButton startTimer={this.startTimer}/>
        {
          (this.state.timerState !== timerStates.RUNNING)
            &&
          (<TimerConfig
            baseTime={this.state.baseTime}
            setBaseTime={this.setBaseTime}
          />)
        }
      </div>
    )
  }
}

export default Timer;