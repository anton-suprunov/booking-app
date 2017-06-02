import React from 'react';

import startOfISOWeek from 'date-fns/start_of_iso_week';
import endOfISOWeek from 'date-fns/end_of_iso_week';
import eachDay from 'date-fns/each_day';
import format from 'date-fns/format';
import classNames from 'classnames';

//import './schedule.scss';
import styles from './schedule.css';

function Cell(props) {
  const className = classNames({
    [styles.cell]: !props.isEmpty,
    [styles.cell_empty]: props.isEmpty,
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
    
    const firstDayOfWeek = startOfISOWeek(new Date()),
      lastDayOfWeek = endOfISOWeek(new Date()),
      //weekRange = moment.range(firstDayOfWeek, lastDayOfWeek);
      weekRange = eachDay(firstDayOfWeek, lastDayOfWeek);

    console.log(weekRange);

    this.week = weekRange.map( (day) => format(day, 'ddd, DD MMM') ),
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
      <div className={styles.wrap}>
        <Cell value={''} key="day0" isEmpty={true} />
        { this.week.map((value, index) => <Cell value={value} key={'day' + (index + 1)} />) }
        { this.getRows() }
      </div>
    );
  }
}


export default Schedule;