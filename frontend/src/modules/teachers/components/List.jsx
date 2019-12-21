import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
  Link,
} from 'react-router-dom';

import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { 
  fetch,
  deleteTeacher,
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
      deleteTeacher, 
    } = this.props;

    return (
      <React.Fragment>
        
        <div className={styles.addBtn}>
          <Button 
            variant="contained"
            component={Link}
            to="/teachers/create"
            color="primary">
            Добавить администратора
          </Button>
        </div>

        <Table style={{
          maxWidth: '90%',
        }}>
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>Super Administrator</TableCell>
              <TableCell style={{ textIndent: '16px' }}>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            { admins.map(admin => (
              <TableRow key={admin._id}>
                <TableCell>{admin.email}</TableCell>
                <TableCell>{admin.superuser ? <DoneIcon /> : <CloseIcon />}</TableCell>
                <TableCell>

                  <Button 
                    className={styles.editBtn} 
                    component={Link}  
                    to={`/teachers/edit/${admin._id}`} 
                    color="primary">
                  Редактировать
                  </Button>

                  <Button 
                    className={styles.deleteBtn} 
                    onClick={ () => deleteTeacher(admin._id) } 
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
  deleteTeacher: PropTypes.func,
  admins: PropTypes.array,
  location: PropTypes.object,
};

export { List };

const mapState = state => ({
  admins: selectors.getAdmins(state),
});

export default connect(mapState, {
  fetch,
  deleteTeacher,
})(
  List
);