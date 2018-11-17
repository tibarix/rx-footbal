import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';

/* component styles */
import { styles } from './styles.scss'
import  Competitions  from '../../components/BusinessComponents/Competitions';

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