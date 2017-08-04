import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
        </label>
        <input type="text"
          defaultValue="default value"
          ref={(input) => this.input = input} 
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;