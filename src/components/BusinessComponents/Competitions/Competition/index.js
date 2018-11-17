import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 600,
        minWidth:400,
        padding: theme.spacing.unit * 2,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
});

function ComplexGrid(props) {
    const { classes } = props;
    return (
        <Grid item style={{cursor:'pointer'}} onClick={() => console.log('hello')}>
            <Paper className={classes.root}>
                <Grid container spacing={16}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={props.emblemUrl || "https://ui-avatars.com/api/?name="+props.name} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={16}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    {props.name}
              </Typography>
                                <Typography gutterBottom>{props.area.name}</Typography>
                                <Typography color="textSecondary">{props.area.id}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">Code: {props.code? props.code : '-'}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
}

ComplexGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ComplexGrid);