import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
  Link,
} from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import DoneIcon from 'material-ui/svg-icons/action/done';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import config from 'config';
import { 
  fetch,
  deleteAdmin,
} from '../actions';
import * as selectors from '../selectors';

import styles from '../styles.css';

class List extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { 
      admins, 
      deleteAdmin, 
    } = this.props;

    return (
      <React.Fragment>
        <RaisedButton
          label="Добавить администратора" 
          primary={true} 
          className={styles.addBtn} 
          containerElement={<Link to="/admins/create" />}
        />

        <Table selectable={false} style={{
          maxWidth: '90%',
        }}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Email</TableHeaderColumn>
              <TableHeaderColumn>Super Administrator</TableHeaderColumn>
              <TableHeaderColumn style={{textIndent: '28px'}}>Actions</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
          { 
            admins.length && admins.map(admin =>   
              <TableRow key={admin._id} hoverable={true}>
                <TableRowColumn>{admin.email}</TableRowColumn>
                <TableRowColumn>{admin.superuser ? <DoneIcon /> : <CloseIcon />}</TableRowColumn>
                <TableRowColumn >
                  <FlatButton 
                    label="Edit" 
                    primary={true} 
                    containerElement={ 
                      <Link 
                        to={`/admins/edit/${admin._id}`} 
                        className={styles.editBtn} 
                      />
                    }
                  />
                  <FlatButton 
                    className={styles.deleteBtn}
                    label="Delete" 
                    secondary={true}
                    onClick={ () => deleteAdmin(admin._id) } 
                  />
                </TableRowColumn>
              </TableRow> 
            )
          }
          </TableBody>
        </Table>

      </React.Fragment>
    );
  }
}
List.propTypes = {
  fetch: PropTypes.func,
  deleteAdmin: PropTypes.func,
  admins: PropTypes.array,
  location: PropTypes.object,
};

export { List };

const mapState = state => ({
  admins: selectors.getAdmins(state),
});

export default connect(mapState, {
  fetch,
  deleteAdmin,
})(
  List
);