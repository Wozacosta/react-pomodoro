/**
 * Created by woza on 3/5/17.
 */
import React from 'react';
//import moment from 'moment';

const leftPad = (val) => {
  if (val < 10)
    return `0${val}`;
  return val
}

const TimerDisplay = (props) => (
  <div className="row">
    <h2 className="text-center">{leftPad(props.timeLeft.get('hours'))}:{leftPad(props.timeLeft.get('minutes'))}:{leftPad(props.timeLeft.get('seconds'))}</h2>
  </div>
);

export default TimerDisplay;