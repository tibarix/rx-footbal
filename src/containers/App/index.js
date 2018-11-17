import React, { Component, Fragment } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import theme from 'configs/config-theme'
import PrimarySearchAppBar from '../../components/BusinessComponents/AppBar'
import Home from 'containers/Home'
import {Teams} from '../../components/BusinessComponents/Teams'
import { appConfig } from 'configs/config-main'

// global styles for entire app
import './styles.scss'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Fragment>
          <PrimarySearchAppBar>{appConfig.name}</PrimarySearchAppBar>
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/teams' component={Teams} />
            </Switch>
          </Router>
        </Fragment>
      </MuiThemeProvider>
    )
  }
}

export default App
