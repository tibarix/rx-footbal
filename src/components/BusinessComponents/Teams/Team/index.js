import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Typography } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 600,
        minWidth: 400,
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
class Team extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const { classes } = this.props;
        console.log(classes)
        return (
            <Grid item style={{ cursor: 'pointer' }} onClick={this.routeChange}>
                <Paper className={classes.root}>
                    <Grid container spacing={16}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src={this.props.crestUrl || "https://ui-avatars.com/api/?name=" + this.props.name} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={16}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        {this.props.name}
                                    </Typography>
                                    <Typography gutterBottom>{this.props.area.name}</Typography>
                                    <Typography color="textSecondary">{this.props.area.id}</Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">Code: {this.props.tla ? this.props.tla : '-'}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        );
    }
}

export default withStyles(styles)(Team);