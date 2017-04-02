import React from 'react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import classNames from 'classnames';

import './schedule.scss';

const moment = extendMoment(Moment),
  baseClass = 'schedule';

function Cell(props) {
  const className = classNames(baseClass + '__cell', {
    [baseClass + '__cell_empty'] : props.isEmpty,
  });
  return <div className={className}>{props.value}</div>;
}

Cell.propTypes = {
  isEmpty : React.PropTypes.bool,
  value : React.PropTypes.string,
};

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    
    const firstDayOfWeek = moment().startOf('isoweek'),
      lastDayOfWeek = moment().endOf('isoweek'),
      weekRange = moment.range(firstDayOfWeek, lastDayOfWeek);
    
    this.week = Array.from( weekRange.by('days') ).map((day) => day.format('ddd, DD MMM') ),
    this.times = [ '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];
  }
  
  getRows() {
    return this.times.map((time, index) => {
      const cells = this.week.map( (day, index2) => <Cell value={''} key={ 'time' + (( index + 1 ) * 10 + index2 + 1) } /> );
      return [<Cell value={time} key={'time' + index} />, ...cells];
    });
  }
  
  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps() {}
  componentWillUpdate() {}
  //shouldComponentUpdate() {}
  
  render() {
    return (
      <div className={baseClass}>
        <Cell value={''} key="day0" isEmpty={true} />
        {this.week.map((value, index) => <Cell value={value} key={'day' + (index + 1)} />)}
        {this.getRows()}
      </div>
    );
  }
}


export default Schedule;