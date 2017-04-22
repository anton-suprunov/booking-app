import React from 'react';
//import classNames from 'classnames';

const baseClass = 'form';

function Input(props) {
  return (
    <input 
      type="text" 
      name={props.name}
      value={props.value} 
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
}
Input.propTypes = {
  name : React.PropTypes.string,
  value : React.PropTypes.string,
  placeholder : React.PropTypes.string,
  onChange : React.PropTypes.func,
};

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  onInputChange(e) {
    console.log(e);
  }
  
  render() {
    return (
      <form className={baseClass}>
        <p>
          <Input name="title" onChange={this.onInputChange} placeholder="hhhh" />
        </p>
        
        <p>
          <Input name="title2" onChange={this.onInputChange} placeholder="123" />
        </p>
      </form>
    );
  }
}


export default EventForm;