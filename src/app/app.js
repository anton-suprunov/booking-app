import React from 'react';
import Drawer from './Drawer';
import Schedule from '../schedule/schedule';
import classNames from 'classnames';
import AppBar from 'material-ui/AppBar';
import withWidth, {LARGE} from 'material-ui/utils/withWidth';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: true,
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({
        drawerOpen: nextProps.width === LARGE,
      });
    }
  }
  
  handleDrawerToggle() {
    this.setState({
      drawerOpen: !this.state.drawerOpen,
    });
  }

  render() {
    return (
      <div className="app">
        <AppBar
          className={classNames('app-bar', {'expanded': this.state.drawerOpen})}
          onLeftIconButtonTouchTap={this.handleDrawerToggle}
          title=""
        />
        <Drawer open={this.state.drawerOpen} />
        <div className={classNames('app-content', {'expanded': this.state.drawerOpen})}>
        <Schedule />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  width : React.PropTypes.number,
};

export default withWidth()(App);