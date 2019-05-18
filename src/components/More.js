import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import {
  NavLink,NavLinkSecond
} from './Headings';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class More extends React.Component {
  state = {
    right: false,

  };

  toggleDrawer = (open) => () => {
    this.setState({
      right:open,
    });
  };

  render() {
    const { classes, children } = this.props;

    const sideList = (
      <div>
        <NavLinkSecond>More</NavLinkSecond>
        {
          children.sub.map((child) => (
            <NavLinkSecond underline="#16a085" to={child.link}>
              {child.name}
            </NavLinkSecond>
          ))
        }
      </div>
    );

    return (
      <div>
        <NavLink onMouseOver={this.toggleDrawer(true)}>More</NavLink>
        <SwipeableDrawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer( true)}
        >
          <div
            tabIndex={0}
            role="button"
            onMouseLeave={this.toggleDrawer(false)}
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

More.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(More);
