import { createMuiTheme } from '@material-ui/core/styles'
import { getStyles }      from 'core/libs/lib-style-helpers'

const colors = getStyles([
  'red',
  'hotPink',
  'aquaBlue'
])

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.aquaBlue
    },
    secondary: {
      main: colors.red
    },
    error: {
      main: colors.red
    }
  }
})

export default theme
