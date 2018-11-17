import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from '@material-ui/core';

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

class Competition extends React.Component {

    constructor(props) {
        super(props);
    }
    goToTeams = () => {
        this.props.redirectToTeams(this.props.code)
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid item style={{ cursor: 'pointer' }} >
                <Paper className={classes.root}>
                    <Grid container spacing={16}>
                        <Grid item>
                            <ButtonBase className={classes.image} onClick={this.goToTeams}>
                                <img className={classes.img} alt="complex" src={this.props.emblemUrl || "https://ui-avatars.com/api/?name=" + this.props.name} />
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
                                <Grid container>
                                    <Grid item>
                                        <Typography style={{ cursor: 'pointer' }}>
                                            <Link to={`/competition/${this.props.code}/standings`}> <Button color='primary'>Standings</Button></Link>
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography style={{ cursor: 'pointer' }}>
                                            <Link to={`/competition/${this.props.code}/matches`}>
                                                <Button color='primary'>Matches</Button>
                                            </Link>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">Code: {this.props.code ? this.props.code : '-'}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        );
    }
}

export default withStyles(styles)(Competition);