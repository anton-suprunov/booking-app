import React from 'react';

function clickableButton(Btn) {
  return class ClickableButton extends React.Component {
    constructor(props) {
      super(props);
    
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
      alert('button clicked');
      dosmthing();
    }
    
    render() {
      return <Btn {...this.props} onClick={this.handleClick} />
    }
  }
}

export default clickableButton;