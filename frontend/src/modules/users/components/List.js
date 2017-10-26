import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';

import { Link } from 'react-router-dom';

//import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

import Snack from '../../../components/Snack';
import TextInput from '../../../components/TextInput';
import * as actions from '../actions';
import * as selectors from '../selectors';

import styles from '../styles.css';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <div>
        <RaisedButton
          label="Добавить администратора" 
          primary={true} 
          className={styles.addBtn} 
          containerElement={<Link to="/users/create" />}
        />
      </div>
    );
  }
}
List.propTypes = {};

export { List };

const mapState = state => ({
  //isAuthentificated: isAuthentificated(state),
});

export default connect(mapState, { 
  ...actions,
})(List);