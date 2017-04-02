import React from 'react';

function withClickHandler(WrappedComponent) {
  
  return class ScheduleClickable extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      console.log(arguments);
    }
    
    render() {
      return <div onClick={this.handleClick}>
        <WrappedComponent {...this.props} />
      </div>;
    }
  };
}

export default withClickHandler;