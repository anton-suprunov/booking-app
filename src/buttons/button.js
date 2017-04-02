import React from 'react';


class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <button onClick={this.props.onClick}>{this.props.name}</button>
    );
  }
}

Button.propTypes = {
  onClick : React.PropTypes.func,
  name : React.PropTypes.string,
};

export default Button;