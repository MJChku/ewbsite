import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';
import Avatar from '@material-ui/core/Avatar/index';
import Grid from '@material-ui/core/Grid/index';
import img from "../../static/images/avatar/test.jpeg";
const styles = {
    avatar: {
    margin: 10,
    },
    bigAvatar: {
        margin: 5,
        width: 100,
        height: 100,
    },
};

function Avatars({image,...props}) {
    const { classes} = props;
    return (
        <Grid container justify="center" alignItems="center">
            <Avatar alt="ewb" src={image} className={classes.bigAvatar} />
            {/*<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.bigAvatar} />*/}
        </Grid>
    );
}

Avatars.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Avatars);
