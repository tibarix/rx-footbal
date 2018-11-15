import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';

/* component styles */
import { styles } from './styles.scss'
import { Competitions } from '../../components/Competitions';

class Home extends Component {
  render() {
    return (
      <div className="container" >
        <Grid container justify="center" spacing={40}>
          <Competitions />
        </Grid>
      </div>
    )
  }
}

export default Home

/*

<Grid container spacing={8} >
          <List dense>
            {[0, 1, 2, 3].map(value => (
              <ListItem key={value} button>
                <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/en/b/bf/UEFA_Champions_League_logo_2.svg" />
                <ListItemText primary={`Line item ${value + 1}`} />
              </ListItem>
            ))}
          </List>
        </Grid>

*/
