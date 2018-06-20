import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
  Link,
} from 'react-router-dom';

import Button from '@material-ui/core/Button';
import DoneIcon from 'material-ui/svg-icons/action/done';
import CloseIcon from 'material-ui/svg-icons/navigation/close';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
 
        <Button 
          variant="contained" 
          className={styles.addBtn} 
          component={Link}
          to="/admins/create"
          color="primary">
          Добавить администратора
        </Button>

        <Table style={{
          maxWidth: '90%',
        }}>
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>Super Administrator</TableCell>
              <TableCell style={{ textIndent: '28px' }}>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            { admins.map(admin => (
              <TableRow key={admin._id} hoverable={true}>
                <TableCell>{admin.email}</TableCell>
                <TableCell>{admin.superuser ? <DoneIcon /> : <CloseIcon />}</TableCell>
                <TableCell>

                  <Button 
                    className={styles.editBtn} 
                    component={Link}  
                    to={`/admins/edit/${admin._id}`} 
                    color="primary">
                  Редактировать
                  </Button>

                  <Button 
                    className={styles.deleteBtn} 
                    onClick={ () => deleteAdmin(admin._id) } 
                    color="secondary">
                  Удалить
                  </Button>
                </TableCell>
              </TableRow>
            ))}
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