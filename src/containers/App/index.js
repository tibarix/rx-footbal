import React, { Component, Fragment } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from 'configs/config-theme'
import PrimarySearchAppBar from '../../components/BusinessComponents/AppBar'
import Home from 'containers/Home'
import { appConfig } from 'configs/config-main'

// global styles for entire app
import './styles.scss'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Fragment>
          <PrimarySearchAppBar>{appConfig.name}</PrimarySearchAppBar>
          <Home />
        </Fragment>
      </MuiThemeProvider>
    )
  }
}

export default App
