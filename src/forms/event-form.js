import React from 'react';
import PropTypes from 'prop-types';

const baseClass = 'form';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }
  
  onInputChange = () => {
    //console.log(this.titleInput.value);
    this.setState({ inputValue: event.target.value });
  }
  render() {
    const { inputValue } = this.props;
    return (
      <form className={baseClass}>
        <p>
          <input value={this.state.inputValue} name="title" onChange={this.onInputChange} placeholder="mmm" />
        </p>
        <input type="button" onClick={this.onInputChange} value="click me" />
      </form>
    );
  }
}
EventForm.propTypes = {
  inputValue: PropTypes.string,
};


export default EventForm;