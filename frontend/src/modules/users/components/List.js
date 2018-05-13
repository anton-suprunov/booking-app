import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import DoneIcon from 'material-ui/svg-icons/action/done';
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import config from 'config';
import Snack from 'components/Snack';
import TextInput from 'components/TextInput';
import { 
  fetch,
  deleteUser,
} from '../actions';
import * as selectors from '../selectors';

import styles from '../styles.css';

class List extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { 
      users, 
      deleteUser, 
      location: { state: { userCreated = false } = {} }, 
    } = this.props;
    return (
      <div>
        <RaisedButton
          label="Добавить администратора" 
          primary={true} 
          className={styles.addBtn} 
          containerElement={<Link to="/users/create" />}
        />

        <Table selectable={false} style={{
          maxWidth: '90%',
        }}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Email</TableHeaderColumn>
              <TableHeaderColumn>Super user</TableHeaderColumn>
              <TableHeaderColumn style={{textIndent: '28px'}}>Actions</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
          { 
            users.length && users.map(user =>   
              <TableRow key={user._id} hoverable={true}>
                <TableRowColumn>{user.username}</TableRowColumn>
                <TableRowColumn>{user.superuser ? <DoneIcon /> : ''}</TableRowColumn>
                <TableRowColumn >
                  <FlatButton 
                    label="Edit" 
                    primary={true} 
                    containerElement={ 
                      <Link 
                        to={`/users/edit/${user._id}`} 
                        className={styles.editBtn} 
                      />
                    }
                  />
                  <FlatButton 
                    className={styles.deleteBtn}
                    label="Delete" 
                    secondary={true}
                    onClick={ () => deleteUser(user._id) } 
                  />
                </TableRowColumn>
              </TableRow> 
            )
          }
          </TableBody>
        </Table>

        <Snack
          open={userCreated}
          message="New administrator succesfully added"
        />
      </div>
    );
  }
}
List.propTypes = {
  fetch: PropTypes.func,
  deleteUser: PropTypes.func,
  users: PropTypes.array,
  location: PropTypes.object,
};

export { List };

const mapState = state => ({
  users: selectors.getUsers(state),
});

export default connect(mapState, {
  fetch,
  deleteUser,
})(List);