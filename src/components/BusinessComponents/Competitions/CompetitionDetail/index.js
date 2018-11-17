import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography, ButtonBase } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 150 + 'px'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

function CompetitionDetails(props) {
  const { classes } = props;
  if(!props.name){
    return null;
  }
  return (
    
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={4}>
              <Grid container spacing={16}>
                <Grid item xs={1}>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={props.emblemUrl || "https://ui-avatars.com/api/?name=" + props.name} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={5} sm container>
                  <Grid item xs container direction="column" spacing={16}>
                    <Grid item>
                      <Typography variant="h3" >
                        Name: {props.name} <Typography color="secondary">{props.code}</Typography>
                      </Typography>
                      <Typography gutterBottom>Area name :{props.area.name} - {props.area.id}</Typography>

                      <Typography >Available seasons: {props.numberOfAvailableSeasons}</Typography>
                      <Typography >Season started on: {props.currentSeason.startDate}</Typography>
                      <Typography >Season ends on: {props.currentSeason.endDate}</Typography>
                      <Typography >Current matchday: {props.currentSeason.currentMatchday}</Typography>
                      <Typography >Teams: {props.teams}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h3" >
                    Scorer:
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Fragment >
  );
}

export default withStyles(styles)(CompetitionDetails);

{/* <Typography variant="h5" component="h3">
                  This is a sheet of paper.
        </Typography>
                <Typography component="p">
                  Paper can be used to build surface or other elements for your application.
        </Typography> */}