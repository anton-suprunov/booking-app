import React from 'react';
import Drawer from './Drawer';
import Schedule from '../schedule/schedule';
import EventForm from '../forms/event-form';
import classNames from 'classnames';
import AppBar from 'material-ui/AppBar';
import withWidth, {LARGE} from 'material-ui/utils/withWidth';

import styles from './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      drawerOpen: true,
    };
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({
        drawerOpen: nextProps.width === LARGE,
      });
    }
  }
  
  handleDrawerToggle = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen,
    });
  }

  render() {
    return (
      <div className="app">
        <AppBar
          className={classNames({
            [styles.bar]: !this.state.drawerOpen, 
            [styles.barExpanded]: this.state.drawerOpen,
          })}
          onLeftIconButtonTouchTap={this.handleDrawerToggle}
          title=""
        />
        
        <Drawer open={this.state.drawerOpen} />

        <div className={classNames({
          [styles.content]: !this.state.drawerOpen, 
          [styles.contentExpanded]: this.state.drawerOpen,
        })}>
          <Schedule />
          <EventForm />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  width : React.PropTypes.number,
};

export default withWidth()(App);