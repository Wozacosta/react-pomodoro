import React, {Component} from 'react';

class TimerButton extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="row">
        <button className="btn btn-success  center-block" onClick={this.props.startTimer}>Start</button>
      </div>
    )
  }
}

export default TimerButton;