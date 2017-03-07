import React, {Component} from 'react';


class TimerConfig extends Component{
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    let newBaseTime = this.props.baseTime;

    if (e.target.id === "hours") newBaseTime.subtract(newBaseTime.get('hours'), 'hours').add(parseInt(e.target.value, 10), 'hours');
    if (e.target.id === "minutes") newBaseTime.subtract(newBaseTime.get('minutes'), 'minutes').add(parseInt(e.target.value,10), 'minutes');
    if (e.target.id === "seconds") newBaseTime.subtract(newBaseTime.get('seconds'), 'seconds').add(parseInt(e.target.value, 10), 'seconds');
    this.props.setBaseTime(newBaseTime);
  }

  render(){
    return (
      <div className="row">
        <h2 className="text-primary">Set Timer</h2>
        <div className="form-group row">
          <label htmlFor="hours" className="col-sm-3 col-form-label">Hours</label>
          <div className="col-sm-9">
            <input id="hours" className="form-control" type="number" defaultValue={this.props.baseTime.get('hours')}  onChange={this.handleChange}/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="minutes" className="col-sm-3 col-form-label">Minutes</label>
          <div className="col-sm-9">
            <input id="minutes" className="form-control" type="number" defaultValue={this.props.baseTime.get('minutes')} onChange={this.handleChange}/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="seconds" className="col-sm-3 col-form-label">Seconds</label>
          <div className="col-sm-9">
            <input id="seconds" className="form-control" type="number" defaultValue={this.props.baseTime.get('seconds')} onChange={this.handleChange}/>
          </div>
        </div>
      </div>
    )
  }
}
export default TimerConfig;